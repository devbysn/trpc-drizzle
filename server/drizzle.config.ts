import {defineConfig} from 'drizzle-kit'

console.log(process.env.DATABASE_URL);

export default defineConfig({
    dialect: 'postgresql',
    out: "./drizzle/migrations",
    dbCredentials:{
        url: "postgresql://postgres:dev123@localhost:5432/trpc_app" as string
    },
    schema : "./drizzle/schema.ts",
    migrations:{
        schema: "public",
        table: "migrations"
    },
    verbose: true,
    strict: true
})



// export default defineConfig({
//     // schema: "./drizzle/schema.ts",
//     // out: "./drizzle/migrations",
//     // driver: 'pg',
//     dialect: 'postgresql,'
//     dbCredentials:{
//         url: process.env.DATABASE_URL as string
//     },
//     migrations:{
//         schema: "public",
//         table: "migrations"
//     },
//     verbose: true,
//     strict: true
// })
