import { Module } from '@nestjs/common'
import { KafkaProducerService } from './kafka_producer.service'
import { KafkaProducerController } from './kafka_producer.controller'
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_PRODUCER',
        transport: Transport.KAFKA as any,
        options: {
          client: {
            clientId: 'kafka_producer',
            brokers: ['localhost:9092']
          },
          consumer: {
            groupId: 'kafka3'
          },
          producerOnlyMode: false
        },
      },
    ]),
  ],
  providers: [KafkaProducerService],
  controllers: [KafkaProducerController],
  exports:[KafkaProducerService]
})
export class KafkaProducerModule {}
