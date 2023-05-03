import { Controller, Get, Param } from '@nestjs/common';
import { CisPartnerService } from './cis_partner.service';

@Controller('cis-partner')
export class CisPartnerController {
  constructor(private readonly cisPartnerService: CisPartnerService) {}
  @Get('getConnection/:partner_code')
  async getAll(@Param('partner_code') partner_code: string) {
    return await this.cisPartnerService.getSpecificConnection(partner_code);
  }
}
