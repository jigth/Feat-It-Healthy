import { Product } from "../models/products";

export interface IProductsRepository {
    getAll(): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    createProduct(productInfo: Product): Promise<Product>;
    deleteProduct(id: string): Promise<Product>;
    updateProduct(updatedProductInfo: Product): Promise<Product>;
}