import { Module } from '@nestjs/common';
import { CisPartnerService } from './cis_partner.service';
import { CisPartnerController } from './cis_partner.controller';
import { DbConnectionModule } from 'src/modules/db_connection/db_connection.module';

@Module({
  imports: [DbConnectionModule],
  providers: [CisPartnerService],
  controllers: [CisPartnerController],
})
export class CisPartnerModule {}
