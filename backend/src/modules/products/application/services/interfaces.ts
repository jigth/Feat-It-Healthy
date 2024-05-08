import {Product} from "../models/products";

export interface IProductService {
    getAll(): Promise<Product[]>;
    getProductById(id: string): Promise<Product | null>;
    createProduct(productInfo: Product): Promise<Product>;
    deleteProduct(id: string): Promise<Product | null>;
    updateProduct(updatedProductInfo: Product): Promise<Product | null>;
}