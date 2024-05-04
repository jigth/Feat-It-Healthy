import { IProductsRepository, Product } from "../domain/ProductsRepository";

class ProductsRepository implements IProductsRepository {
    getAll(): Product[] {
        return [];
    }

    getProductById(id: string): Product {
        throw Error('not implemented');
    }

    createProduct(): Product {
        throw Error('not implemented');
    }

    deleteProduct(): Product {
        throw Error('not implemented');
    }

    updateProduct(): Product {
        throw Error('not implemented');
    }
}

const productsRepository = new ProductsRepository()

export {
    productsRepository,
}