import { DataSource } from 'typeorm'

// Dotenv (originally used in the main index.ts file) is also used
// in this file to help scripts dependent on this file load all env
// variables correctly.
import * as dotenv from 'dotenv';
dotenv.config()

// The following setting is not recommended to use for security reasons, but it is here for deployment convenience.
const bypassSSLVerification = /true/i.test(process.env.BYPASS_SSL_VERIFICATION ?? '')

export default new DataSource({
    type: "postgres",
    host: process.env.PG_HOST || "localhost",
    port: Number(process.env.PG_PORT) || 5432,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB_NAME,
    entities: [__dirname + "/../**/entities/*.entity.{js,ts}"],
    migrations: [__dirname + "/../**/migrations/*.{js,ts}"],
    synchronize: Boolean(process.env.SYNCHRONIZE) || false,
    logging: false,
    ssl: {
        rejectUnauthorized: !bypassSSLVerification,
        ca: process.env.PG_CA_CERT,
    }
});