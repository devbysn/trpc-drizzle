import {trpc} from '../trpc'
import { z } from 'zod'
import {db} from '../drizzle/db'
import { ProductTable } from '../drizzle/schema';
import { ilike } from 'drizzle-orm';

const searchInputSchema = z.object({
    searchTerm: z.string()
});


export const productsRouter = trpc.router({
    sayHi: trpc.procedure.query(()=>{
        return "Hello from Products"
    }),    
    searchProduct: trpc.procedure.input(searchInputSchema).query(async ({ input }) => {

        console.log("Product input : ", input);
        const { searchTerm } = input;
        const products = await db.select().from(ProductTable).where(ilike(ProductTable.product_name, `%${searchTerm}%`)).execute()
        console.log("Product output : ", products);
        
        return products;
    })

})
