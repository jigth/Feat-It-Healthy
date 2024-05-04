import { Router, Request, Response } from "express";
import { productsRepository } from "./ProductsRepository";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const products = productsRepository.getAll();
    res.status(200).send({products});
});


export {
    router as productsRouter,
};