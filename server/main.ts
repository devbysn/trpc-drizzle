import 'dotenv/config'
import { startServer} from './app'
import insertProducts from './drizzle/dummy_data'

async function main() {
    // await insertProducts();
    startServer()
}

main()