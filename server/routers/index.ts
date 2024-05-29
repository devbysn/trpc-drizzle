import {trpc} from '../trpc'
import { productsRouter } from './products';
import { usersRouter } from './users';

export const appRouter = trpc.router({
    sayHi: trpc.procedure.query(()=>{
        return "Hello"
    }),
    users : usersRouter,
    products: productsRouter
})
