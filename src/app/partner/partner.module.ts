import { Module } from '@nestjs/common'
import { PartnerService } from './partner.service'
import { PartnerController } from './partner.controller'
import { DbConnectionModule } from '../../providers/db_connection/db_connection.module'
import { KafkaProducerModule } from '../../providers/kafka/kafka_producer/kafka_producer.module'
@Module({
  imports: [DbConnectionModule, KafkaProducerModule],
  providers: [PartnerService],
  controllers: [PartnerController],
})
export class PartnerModule {}
