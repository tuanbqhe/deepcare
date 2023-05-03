import { Controller, Get, Param, Req } from '@nestjs/common';
import { PartnerService } from './partner.service';
@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}
  @Get('getConnection/:database')
  async getConnection(@Param('database') database: string ) {
    return await this.partnerService.getSpecificConnection(database);
  }
}
