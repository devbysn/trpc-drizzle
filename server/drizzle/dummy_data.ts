import { db } from "./db";
import { ProductTable } from "./schema";

async function insertProducts() {
await db.insert(ProductTable).values({
    product_name: "iPhone 15 Pro",
    price: "1099.99",   
    description: "The latest iPhone 15 Pro with advanced features and improved performance",
    created_at: new Date(),
 
});

await db.insert(ProductTable).values({
    product_name: "iPhone 14",
    price: "899.99",   
    description: "iPhone 14 with a new design and enhanced camera capabilities",
    created_at: new Date(),
 
});

await db.insert(ProductTable).values({
    product_name: "iPhone 13 Mini",
    price: "699.99",   
    description: "Compact version of iPhone 13 with powerful features",
    created_at: new Date(),
 
});

await db.insert(ProductTable).values({
    product_name: "iPhone SE (2023)",
    price: "499.99",   
    description: "Affordable iPhone SE with the latest A-series chip",
    created_at: new Date(),
 
});

await db.insert(ProductTable).values({
    product_name: "Samsung Galaxy S23",
    price: "899.99",   
    description: "The latest Samsung Galaxy with a stunning display",
    created_at: new Date()});

await db.insert(ProductTable).values({
    product_name: "Google Pixel 7",
    price: "799.99",   
    description: "Google's flagship phone with the best camera",
    created_at: new Date(),
 
});

await db.insert(ProductTable).values({
    product_name: "OnePlus 11",
    price: "699.99",   
    description: "High-performance phone with fast charging",
    created_at: new Date(),
 
});

await db.insert(ProductTable).values({
    product_name: "Sony Xperia 5 III",
    price: "899.99",   
    description: "Compact phone with exceptional camera quality",
    created_at: new Date(),
 
});

await db.insert(ProductTable).values({
    product_name: "Huawei P50 Pro",
    price: "799.99",   
    description: "Powerful phone with impressive battery life",
    created_at: new Date(),
 
});

await db.insert(ProductTable).values({
    product_name: "Xiaomi Mi 11 Ultra",
    price: "999.99",   
    description: "Feature-packed phone with a large display",
    created_at: new Date(),
 
});

await db.insert(ProductTable).values({
    product_name: "Oppo Find X3 Pro",
    price: "899.99",   
    description: "Innovative phone with unique design",
    created_at: new Date(),
 
});

await db.insert(ProductTable).values({
    product_name: "Nokia 9.3 PureView",
    price: "799.99",   
    description: "Classic phone with modern features",
    created_at: new Date(),
 
});

await db.insert(ProductTable).values({
    product_name: "LG Wing",
    price: "999.99",   
    description: "Unique swivel-screen phone",
    created_at: new Date(),
 
});

await db.insert(ProductTable).values({
    product_name: "Asus ROG Phone 5",
    price: "1099.99",   
    description: "Ultimate gaming phone with high refresh rate display",
    created_at: new Date(),
 
});

await db.insert(ProductTable).values({
    product_name: "Motorola Edge Plus",
    price: "899.99",   
    description: "Flagship phone with powerful specs",
    created_at: new Date(),
 
});
}
export default insertProducts