import express from 'express'
import cors from 'cors'
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from './routers'

const app = express()
app.use(cors({origin: 'http://localhost:5173'}))
app.use("/trpc", trpcExpress.createExpressMiddleware({
    router: appRouter, 
}))

// Function to start the server
export const startServer = (()=>{
    app.listen(3000, () => {
        console.log("Listening on server: 3000");
    });
})
      
export type AppRouter = typeof appRouter