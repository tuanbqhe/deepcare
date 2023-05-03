import { BadRequestException, Injectable } from '@nestjs/common';
import { BENH_NHAN } from 'src/modules/db_connection/entity/BENH_NHAN.entity';
import { getConnectionManager } from 'typeorm';
import { DbConnectionService } from 'src/modules/db_connection/db_connection.service';

@Injectable()
export class CisPartnerService {
  constructor(private readonly DbConnectionService: DbConnectionService) {}
  async getSpecificConnection(dbName: string) {
    try {
      getConnectionManager().connections.map((con) => console.log(con.name));
      const connection = this.DbConnectionService.getSpecificConnection(dbName);
      return await connection.getRepository(BENH_NHAN).find({});
    } catch (error) {
      throw error;
    }
  }
}
