import {defineConfig} from 'drizzle-kit'

console.log(process.env.DATABASE_URL);

export default defineConfig({
    dialect: 'postgresql',
    out: "./drizzle/migrations",
    dbCredentials:{
        url: process.env.DATABASE_URL as string
    },
    schema : "./drizzle/schema.ts",
    migrations:{
        schema: "public",
        table: "migrations"
    },
    verbose: true,
    strict: true
})
