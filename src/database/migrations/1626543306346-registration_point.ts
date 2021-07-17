import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class registrationPoint1626543306346 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'registrationPoint',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                }, {
                    name: 'namePoint',//nome do ponto
                    type: 'varchar'
                }, {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                }, {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                }, {
                    name: 'about',// descrição do ponto
                    type: 'text'
                },
                {
                    name: 'whatsapp',//contato
                    type: 'varchar',
                },{
                    name: 'responsible_name',//nome da pessoa ou da orng
                    type: 'varchar'
                },{
                    name: 'type', // se é um ponto de vacina ou local de distribuição
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('registrationPoint');
    }

}
