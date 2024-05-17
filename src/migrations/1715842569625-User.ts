import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1715842569625 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "varchar",
            length: "26",
            isGenerated: true,
            generationStrategy: "uuid",
            default: "ulid()",
            isPrimary: true,
          },
          {
            name: "email",
            length: "60",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
            length: "60",
          },
          {
            name: "email_verify_at",
            type: "Date",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "Date",
          },
          {
            name: "updated_at",
            type: "Date",
            isNullable: true,
          },
          {
            name: "deleted_at",
            type: "Date",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
