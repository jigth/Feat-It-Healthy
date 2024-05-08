// import {  } from "../infrastructure/repositories/products";
import { IProductsRepository} from "../../domain/repositories/products";
import { Product } from "../../domain/models/products";
import { IProductService} from "./interfaces";

export class ProductsService implements IProductService {
    productsRepo: IProductsRepository

    constructor(productsRepo: IProductsRepository) {
        this.productsRepo = productsRepo
    }

    async getAll(): Promise<Product[]> {
        try {
            return await this.productsRepo.getAll()
        } catch (err) {
            console.log(err)
            throw Error("Error while getting products")
        }
    }

    async getProductById(id: string): Promise<Product | null> {
        try {
            return await this.productsRepo.getProductById(id)
        } catch (err) {
            console.log(err)
            throw Error("Error while getting the product")
        }
    }

    async createProduct(productInfo: Product): Promise<Product> {
        try {
            return await this.productsRepo.createProduct(productInfo)
        } catch (err) {
            console.log(err)
            throw Error("Error while creating the product")
        }
    }

    async updateProduct(updatedProductInfo: Product): Promise<Product | null> {
        try {
            return await this.productsRepo.updateProduct(updatedProductInfo)
        } catch (err) {
            console.log(err)
            throw Error("Error while updating the product")
        }
    }

    async deleteProduct(id: string): Promise<Product | null> {
        try {
            return await this.productsRepo.deleteProduct(id)
        } catch (err) {
            console.log(err)
            throw Error("Error while deleting the product")
        }
    }
}