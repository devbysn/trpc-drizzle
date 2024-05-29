import {db} from './drizzle/db'
import { ProductTable, UserTable } from './drizzle/schema'
import 'dotenv/config'
import { server} from './app'
import insertProducts from './drizzle/dummy_data'

async function main() {
    // await insertProducts();
    server
}

main()