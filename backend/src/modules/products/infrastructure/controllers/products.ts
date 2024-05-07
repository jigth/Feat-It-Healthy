import { IProductsRepository } from "../../domain/repositories/products";
import { IProductService } from "../../application/services/interfaces";
import { Request, Response, Router } from "express";
import { ProductsRepository } from "../repositories/products";
import { appDataSource } from "../../../../shared/infrastructure/database/typeorm";
import { ProductsService } from "../../application/services/products";
import { Product } from "../../application/models/products";

export class ProductsController {
    public path = '/products';
    public router = Router();
    private productsSvc: IProductService
    private readonly productsRepo: IProductsRepository

    constructor() {
        this.productsRepo = new ProductsRepository(appDataSource.manager)
        this.productsSvc = new ProductsService(this.productsRepo)
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.getAllProducts)
        this.router.get(`/:id`, this.getProductById)
        this.router.post(`/`, this.createProduct)
    }

    public getAllProducts = async (req: Request, res: Response) => {
        try {
            const products = await this.productsSvc.getAll();
            res.status(200).send({ products });
        } catch (err) {
            console.log(err)
            res.status(500).send({ error: "Error while getting the product" })
        }
    }

    private getProductById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const product = await this.productsSvc.getProductById(id);

            if (!product) {
                res.status(404).send({ error: "Product not found" })
                return
            }

            res.status(200).send({ product });
        } catch (err) {
            console.log(err)
            res.status(500).send({ error: "Error while getting the product" })
        }
    }

    private createProduct = async (req: Request, res: Response) => {
        try {
            const {
                cost,
                name,
                imageUrl,
                inventory,
                description
            } = req.body;

            const product: Product = {
                cost,
                name,
                imageUrl,
                inventory,
                description
            }

            const newProduct = await this.productsSvc.createProduct(product)
            res.status(200).send({ id: newProduct.id });
        } catch (err) {
            console.log(err)
            res.status(500).send({ error: "Error while getting the product" })
        }
    }
}