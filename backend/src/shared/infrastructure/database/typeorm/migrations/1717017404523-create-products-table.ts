import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductsTable1717017404523 implements MigrationInterface {
    name = 'CreateProductsTable1717017404523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" text NOT NULL, "imageUrl" character varying NOT NULL, "inventory" integer NOT NULL, "cost" numeric NOT NULL, CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
