import { pgTable, uuid, varchar, numeric, text, timestamp } from 'drizzle-orm/pg-core';

export const UserTable = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    username: varchar("username", { length: 255 }).notNull().unique(),
    password: varchar("password", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
});


export const ProductTable = pgTable("products", {
    id: uuid("id").primaryKey().defaultRandom(),
    product_name: varchar("product_name", { length: 255 }).notNull().unique(),
    price: varchar("price"),
    description: text("description").notNull(),
    created_at: timestamp("created_at").defaultNow(),
})
