import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class RegistrationPointTable1627808901571 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'registrationPoint',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'namePoint', //nome do ponto
            type: 'varchar',
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 6,
            precision: 10,
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 6,
            precision: 10,
          },
          {
            name: 'about', // descrição do ponto
            type: 'text',
          },
          {
            name: 'whatsapp', //contato
            type: 'varchar',
          },
          {
            name: 'responsible_name', //nome da pessoa ou da orng
            type: 'varchar',
          },
          {
            name: 'typePoint', // se é um ponto de vacina ou local de distribuição
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('registrationPoint');
  }
}
