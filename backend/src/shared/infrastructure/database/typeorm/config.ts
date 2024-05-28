import { DataSource } from 'typeorm'
import { Product } from "./entities/Products.entity"

export const appDataSource = new DataSource({
    type: "postgres",
    host: process.env.PG_HOST || "localhost",
    port: Number(process.env.PG_PORT) || 5432,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB_NAME,
    entities: [Product],
    synchronize: Boolean(process.env.SYNCHRONIZE) || false,
    logging: false,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.PG_CA_CERT,
    }
})