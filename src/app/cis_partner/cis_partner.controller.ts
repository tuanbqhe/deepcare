import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CisPartnerService } from './cis_partner.service'

@Controller('cis-partner')
export class CisPartnerController {
  constructor(private readonly cisPartnerService: CisPartnerService) {}
  @Post('getConnection')
  async getAll(@Body() data: any) {
    return await this.cisPartnerService.getAll(data)
  }
}
