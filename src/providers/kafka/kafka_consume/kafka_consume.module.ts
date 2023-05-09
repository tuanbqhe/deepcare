import { Module } from '@nestjs/common';
import { KafkaConsumeService } from './kafka_consume.service';
import { KafkaConsumeController } from './kafka_consume.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'KAFKA_CONSUME',
    //     transport: Transport.KAFKA as any,
    //     options: {
    //       client: {
    //         clientId: 'kafka_consume',
    //         brokers: ['localhost:9092']
    //       },
    //       consumer: {
    //         groupId: 'kafka1'
    //       },
    //       producerOnlyMode: false
    //     },
    //   },
    // ]),
  ],
  providers: [KafkaConsumeService],
  controllers: [KafkaConsumeController]
})
export class KafkaConsumeModule {}
