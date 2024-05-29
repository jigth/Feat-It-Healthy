import { DataSource } from 'typeorm'
import { Product } from './entities/Products.entity';

// Dotenv (originally used in the main index.ts file) is also used
// in this file to help scripts dependent on this file load all env
// variables correctly.
import * as dotenv from 'dotenv';
dotenv.config()

export default new DataSource({
    type: "postgres",
    host: process.env.PG_HOST || "localhost",
    port: Number(process.env.PG_PORT) || 5432,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB_NAME,

    entities: ["src/**/entities/*.entity.ts"],
    migrations: ["src/**/migrations/*.ts"],
    synchronize: Boolean(process.env.SYNCHRONIZE) || false,
    logging: false,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.PG_CA_CERT,
    }
})