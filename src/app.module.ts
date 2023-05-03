import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConnectionModule } from './modules/db_connection/db_connection.module';
import { PartnerModule } from './modules/partner/partner.module';
import { CisPartnerModule } from './modules/cis_partner/cis_partner.module';

@Module({
  imports: [DbConnectionModule, PartnerModule, CisPartnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
