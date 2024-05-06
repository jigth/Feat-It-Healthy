import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Product as IProduct } from "../../../../../modules/products/domain/models/products";

@Entity('products')
export class Product implements IProduct {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({ type: "varchar", unique: true, nullable: false })
    name!: string;

    @Column({ type: "text", nullable: false })
    description!: string;
    
    @Column({ type: "varchar", nullable: false })
    imageUrl!: string;
    
    @Column({ nullable: false })
    inventory!: number;
    
    @Column({ type: "numeric", nullable: false })
    cost!: number;
}
