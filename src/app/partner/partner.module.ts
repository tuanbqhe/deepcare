import { Module } from '@nestjs/common'
import { PartnerService } from './partner.service'
import { PartnerController } from './partner.controller'
import { DbConnectionModule } from '../../providers/db_connection/db_connection.module'
@Module({
  imports: [DbConnectionModule],
  providers: [PartnerService],
  controllers: [PartnerController],
})
export class PartnerModule {}
