import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnChecked1699489727803 implements MigrationInterface {
    name = 'AddColumnChecked1699489727803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ADD "checked" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "checked"`);
    }

}
