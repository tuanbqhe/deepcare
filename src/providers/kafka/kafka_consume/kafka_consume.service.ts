import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { Kafka } from 'kafkajs'
import { kafkaTopics } from '../../../configs/kafka_topic'
import { kafkaHandler } from '../message_handler/kafka_handler'
@Injectable()
export class KafkaConsumeService implements OnModuleInit, OnModuleDestroy {
  constructor() {} // @Inject('KAFKA_CONSUME') private readonly kafkaConsumeClient: ClientKafka,

  onModuleDestroy() {}
  async onModuleInit() {
    const kafka = new Kafka({
      clientId: 'kafka_consume',
      brokers: ['localhost:9092'],
    })
    const consumer = kafka.consumer({ groupId: 'kafka1' })
    await consumer.connect()
    await consumer.subscribe({
      topics: Object.values(kafkaTopics.deepcare) as any,
      fromBeginning: true,
    })

    await consumer.run({
      eachMessage: async ({ message, partition, topic }) => {
        const data = JSON.parse(message.value.toString())
        console.log('Consume received message: ', data)
        await consumer.commitOffsets([
          { offset: message.offset, partition, topic },
        ])
        kafkaHandler(data, topic)
      },
    })
  }

  subcribe() {}
}
