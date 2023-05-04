import { Body, Controller, Get, Post, Param, UsePipes } from '@nestjs/common'
import { DbConnectionService } from './db_connection.service'
import { GetConnectionPipe } from '../../common/pipes/getConnection.pipe'
@Controller('deepcare-partner')
export class DbConnectionController {
  constructor(private readonly DbConnectionService: DbConnectionService) {}

  @Get('getAll')
  async getAllPartnerConnection() {
    return await this.DbConnectionService.getAllPartnerConnection(
      'his_deepcare_catalog',
    )
  }

  @Get('getConnection')
  async getConnection() {
    return await this.DbConnectionService.getSpecificConnection('n')
  }
  @Post('closeConnection')
  reLoadConnection(@Body() data: any) {
    return this.DbConnectionService.closeSpecificConnection(data)
  }

  @Post('addConnection')
  async addConnection(@Body() dbConfig: any) {
    return await this.DbConnectionService.addConnection(dbConfig)
  }
  @Post('reConnection')
  reConnection(@Body() data: any) {
    return this.DbConnectionService.reConnectionSpecificConnection(
      data?.partner_code,
    )
  }

  // @UsePipes(GetConnectionPipe)
  @Get('reLoad/:partner_code')
  reLoad(@Param('partner_code') partner_code: string) {
    return this.DbConnectionService.reloadConnection(partner_code)
  }
}
