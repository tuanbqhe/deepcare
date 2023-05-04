import { Module } from '@nestjs/common'
import { DbConnectionController } from './db_connection.controller'
import { DbConnectionService } from './db_connection.service'
import { DAN_TOC } from '../../app/partner/entity/DAN_TOC.entity'
import { createConnection } from 'typeorm'
import { BENH_NHAN } from '../../app/partner/entity/BENH_NHAN.entity'
import { DBConfig } from 'src/configs/database_connection/dbConfig'

@Module({
  imports: [],
  controllers: [DbConnectionController],
  providers: [DbConnectionService],
  exports: [DbConnectionService],
})
export class DbConnectionModule {
  static Connections: any
  constructor(private DbConnectionService: DbConnectionService) {}
  async onModuleInit() {
    await createConnection(DBConfig as any)
    const connections = await this.DbConnectionService.getAllPartnerConnection(
      'his_deepcare_catalog',
    )
    for (const connection of connections) {
      const { host, port, user, password, database, PARTNER_CODE } = connection
      await createConnection({
        type: 'mysql',
        host,
        port,
        username: user,
        password,
        database,
        entities: [BENH_NHAN, DAN_TOC],
        synchronize: false,
        name: PARTNER_CODE,
      })
    }
  }
  // async getAll() {
  //   const connections =
  //     await this.DbConnectionService.getAllPartnerConnection();
  //   const activeConnections = [];
  //   for (const connection of connections) {
  //     const { host, port, user, password, database } = connection;
  //     const a = TypeOrmModule.forRoot({
  //       type: 'mysql',
  //       host,
  //       port,
  //       username: user,
  //       password,
  //       database,
  //       entities: [DAN_TOC],
  //       synchronize: false,
  //     });
  //     activeConnections.push(a);
  //   }
  //   DbConnectionModule.Connections = activeConnections;
  // }
  // static async forRoot(): Promise<any> {
  //   const con = await createConnection({
  //     type: 'mysql',
  //     host: 'localhost',
  //     port: 3002,
  //     username: 'root',
  //     password: '123',
  //     database: 'his_deepcare_catalog',
  //     entities: [DAN_TOC],
  //     synchronize: false,
  //     name: 'hiv',
  //   });
  //   await createConnection({
  //     type: 'mysql',
  //     host: 'localhost',
  //     port: 3002,
  //     username: 'root',
  //     password: '123',
  //     database: 'dc_catalog_prm',
  //     entities: [DAN_TOC],
  //     synchronize: false,
  //     name: 'hicc',
  //   });
  //   console.log('object========================33');
  //   // const module = new DbConnectionModule(new DbConnectionService(con));
  //   // await module.getAll();
  //   return {
  //     module: DbConnectionModule,
  //   };
  // }
}
