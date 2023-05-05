import { Body, Controller, Get, Post, Param, UsePipes } from '@nestjs/common'
import { DbConnectionService } from './db_connection.service'
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
  async getConnection(@Body() data: any) {
    return await this.DbConnectionService.getSpecificConnection(
      data?.partner_code,
    )
  }
  @Post('closeConnection')
  reLoadConnection(@Body() data: any) {
    return this.DbConnectionService.closeSpecificConnection(data?.partner_code)
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
  @Post('reLoad')
  reLoad(@Body() data: any) {
    return this.DbConnectionService.reloadConnection(data?.partner_code)
  }
}
