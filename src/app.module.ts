import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DbConnectionModule } from './providers/db_connection/db_connection.module'
import { PartnerModule } from './app/partner/partner.module'
import { CisPartnerModule } from './app/cis_partner/cis_partner.module'

@Module({
  imports: [DbConnectionModule, PartnerModule, CisPartnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
