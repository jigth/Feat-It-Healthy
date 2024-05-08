import "dotenv/config";
import express, { Express, Request, Response } from "express";
import { ProductsController } from "./modules/products/infrastructure/controllers/products";

const app: Express = express();
const port = process.env.PORT || 3000;

const productsController = new ProductsController();

// Database
import "./shared/infrastructure/database/typeorm/index";

// Middlewares
app.use(express.json());

// Routes
console.log('path is:', productsController.path)
app.use(productsController.path, productsController.router);

app.get('/', (req: Request, res: Response) => {
    res.json({ msg: "Welcome to Feat it" })
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
