import {trpc} from '../trpc'
import z from 'zod'
import { UserTable } from '../drizzle/schema';
import { db } from '../drizzle/db';
import { and, eq } from 'drizzle-orm';

const signupInputSchema = z.object({
    username: z.string(),
    password: z.string(),
    email: z.string().email()
});

const loginInputSchema = z.object({
    username: z.string(),
    password: z.string()
});

const updateInputSchema = z.object({
    id: z.string(),
    username: z.string().optional(),
    password: z.string().optional(),
    email: z.string().email().optional()
});


export const usersRouter = trpc.router({
    sayHi: trpc.procedure.query(() => {
        return "Hello from User";
    }),

    signup: trpc.procedure.input(signupInputSchema).mutation(async ({ input }) => {
        const { username, password, email } = input;
        console.log("Input ; ", input);
        
        // Check if the username is already taken
        const existingUser = await db.select().from(UserTable).where(eq(UserTable.username, username))
        console.log("Existing User: ", existingUser);
        
        if (existingUser) {
            throw new Error("Username already exists");
        }
            // Insert the new user into the database
        const newUser = await db.insert(UserTable).values({ username, password, email });
        return newUser;
    }),
    login: trpc.procedure.input(loginInputSchema).mutation(async ({ input }) => {
        const { username, password } = input;
        // Check if the user exists and the password is correct
        console.log("Login Creds : ", input);
        
        const user = await db.select().from(UserTable).where(and(eq(UserTable.username, username), eq(UserTable.password, password)));
        if (!user) {
            throw new Error("Invalid username or password");
        }
        return user;
    }),

});