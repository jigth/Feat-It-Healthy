export interface IProductsRepository {
    getAll(): Product[];
    getProductById(id: string): Product;
    createProduct(): Product;
    deleteProduct(): Product;
    updateProduct(): Product;
}

export type Product = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    inventory: number;
    cost: number;
}