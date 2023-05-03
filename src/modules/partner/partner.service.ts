import { BadRequestException, Injectable } from '@nestjs/common';
import { BENH_NHAN } from 'src/modules/db_connection/entity/BENH_NHAN.entity';
import { DAN_TOC } from 'src/modules/db_connection/entity/DAN_TOC.entity';
import { DbConnectionService } from 'src/modules/db_connection/db_connection.service';
import { getConnectionManager } from 'typeorm';

@Injectable()
export class PartnerService {
  constructor(private readonly DbConnectionService: DbConnectionService) {}
  async getSpecificConnection(dbName: string) {
    try {
      const connection = this.DbConnectionService.getSpecificConnection(dbName);
      return await connection.getRepository(BENH_NHAN).find({});
    } catch (error) {
      throw error;
    }
  }
}
