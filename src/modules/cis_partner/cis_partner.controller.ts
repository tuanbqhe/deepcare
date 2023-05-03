import { Controller, Get, Param } from '@nestjs/common';
import { CisPartnerService } from './cis_partner.service';

@Controller('cis-partner')
export class CisPartnerController {
  constructor(private readonly cisPartnerService: CisPartnerService) {}
  @Get('getConnection/:dbName')
  async getAll(@Param('dbName') dbName: string) {
    return await this.cisPartnerService.getSpecificConnection(dbName);
  }
}
