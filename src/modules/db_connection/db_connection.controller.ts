import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { DbConnectionService } from './db_connection.service';
import { DbConnectionModule } from './db_connection.module';

@Controller('deepcare-partner')
export class DbConnectionController {
  constructor(private readonly DbConnectionService: DbConnectionService) {}

  @Get('getAll')
  async getAllPartnerConnection() {
    return await this.DbConnectionService.getAllPartnerConnection(
      'his_deepcare_catalog',
    );
  }

  @Get('getConnection')
  async getConnection() {
    return await this.DbConnectionService.getSpecificConnection('n');
  }
  @Get('reloadConnection/:dbName')
  reLoadConnection(@Param('dbName') dbName: string) {
    return this.DbConnectionService.reloadSpecificConnection(dbName);
  }

  @Post('addConnection')
  async addConnection(@Body() dbConfig: any) {
    return await this.DbConnectionService.addConnection(dbConfig);
  }
  @Get('reConnection/:dbName')
  reConnection(@Param('dbName') dbName: string) {
    return this.DbConnectionService.reConncetionSpecificConnection(dbName);
  }
}
