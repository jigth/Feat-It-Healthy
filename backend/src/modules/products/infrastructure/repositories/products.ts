import { IProductsRepository } from "../../domain/repositories/products";
import { Product } from "../../../../shared/infrastructure/database/typeorm/entities/Products.entity";
import { EntityManager, Repository } from "typeorm";

export class ProductsRepository extends Repository<Product> implements IProductsRepository {
    
    private repo: Repository<Product>
    
    constructor(manager: EntityManager) {
        super(Product, manager)
        this.repo = manager.getRepository(Product)
    }

    async getAll(): Promise<Product[]> {
        try {
            return await this.repo.find()
        } catch (err) {
            console.log(err)
            throw Error("Error getting products")
        }
    }

    async getProductById(id: string): Promise<Product | null> {
        try {
            const product = await this.repo.findOneBy({ id })
            if (!product) {
                return null
            }
            return product;
        } catch (err) {
            console.log(err)
            throw Error("Error getting product")
        }
    }

    async createProduct(productInfo: Product): Promise<Product> {
        try {
            const newProduct = this.repo.create(productInfo)

            await this.repo.save(newProduct)
            return newProduct;
        } catch (err) {
            console.log(err)
            throw Error("Error creating product")
        }
    }

    async deleteProduct(id: string): Promise<Product | null> {
        try {
            const product= await this.getProductById(id)

            if (!product) {
                return null
            }

            await this.repo.delete({id})
            return product
        } catch (err) {
            console.log(err)
            throw Error("Error deleting product")
        }
    }

    async updateProduct(updatedProductInfo: Product): Promise<Product | null> {
        try {
            const product = await this.getProductById(updatedProductInfo.id)

            if (!product) {
                return null
            }

            product.cost = updatedProductInfo.cost
            product.name = updatedProductInfo.name
            product.description = updatedProductInfo.description
            product.inventory = updatedProductInfo.inventory
            product.imageUrl = updatedProductInfo.imageUrl

            await this.repo.save(product)
            return product
        } catch (err) {
            console.log(err)
            throw Error("Error updating product")
        }
    }
}