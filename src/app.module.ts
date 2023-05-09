import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DbConnectionModule } from './providers/mysql_connection/mysql_connection.module'
import { CisPartnerModule } from './app/cis_partner/cis_partner.module'
import { KafkaProducerModule } from './providers/kafka/kafka_producer/kafka_producer.module'
import { KafkaConsumeModule } from './providers/kafka/kafka_consume/kafka_consume.module'
import { PartnerModule } from './app/partner/partner.module'
@Module({
  imports: [
    DbConnectionModule,
    CisPartnerModule,
    KafkaConsumeModule,
    KafkaProducerModule,
    PartnerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
