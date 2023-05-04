import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UsePipes,
} from '@nestjs/common'
import { PartnerService } from './partner.service'
import { GetConnectionPipe } from '../../common/pipes/getConnection.pipe'
@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}
  @Post('getConnection')
  async getConnection(@Body() data: any) {
    return await this.partnerService.getSpecificConnection(data)
  }
}
