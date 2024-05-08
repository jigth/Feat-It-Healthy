import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./entities/Products.entity"

const appDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "postgres",
    entities: [Product],
    synchronize: true,
    logging: false,
})

appDataSource.initialize()
    .then(() => {
        console.log('Database have been initialized succesfully')
    })
    .catch((error) => {
        console.log(error)
    })

export { appDataSource }