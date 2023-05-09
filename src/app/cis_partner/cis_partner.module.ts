import { Module } from '@nestjs/common'
import { CisPartnerService } from './cis_partner.service'
import { CisPartnerController } from './cis_partner.controller'
import { DbConnectionModule } from '../../providers/mysql_connection/mysql_connection.module'

@Module({
  imports: [DbConnectionModule],
  providers: [CisPartnerService],
  controllers: [CisPartnerController],
})
export class CisPartnerModule {}
