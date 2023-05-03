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
  @Get('closeConnection/:partner_code')
  reLoadConnection(@Param('partner_code') partner_code: string) {
    return this.DbConnectionService.closeSpecificConnection(partner_code);
  }

  @Post('addConnection')
  async addConnection(@Body() dbConfig: any) {
    return await this.DbConnectionService.addConnection(dbConfig);
  }
  @Get('reConnection/:partner_code')
  reConnection(@Param('partner_code') partner_code: string) {
    return this.DbConnectionService.reConnectionSpecificConnection(
      partner_code,
    );
  }
}
