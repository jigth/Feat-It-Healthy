import "dotenv/config";
import express, { Express, Request, Response } from "express";
import { productsRouter } from "./modules/products/infrastructure/ProductsRoutes";

const app: Express = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

app.use('/products', productsRouter);

app.get('/', (req: Request, res: Response) => {
    res.json({ msg: "Welcome to Feat it" })
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
