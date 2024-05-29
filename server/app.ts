import express from 'express'
import cors from 'cors'
import type { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone';
import type { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws';
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from './routers'
import {applyWSSHandler} from '@trpc/server/adapters/ws'
import ws from 'ws'

const app = express()
app.use(cors({origin: 'http://localhost:5173'}))
app.use("/trpc", trpcExpress.createExpressMiddleware({
    router: appRouter, 
}))

// Function to start the server
export const server = app.listen(3000, () => {
        console.log("Listening on server: 3000");
    });

    applyWSSHandler({
        wss: new ws.Server({ server }), // * <- pass the server
        router: appRouter, // * <- pass the router
        // createContext, // * <- pass the context
      })
      
export type AppRouter = typeof appRouter