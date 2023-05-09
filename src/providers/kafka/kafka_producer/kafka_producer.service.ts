import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { kafkaTopics } from '../../../configs/kafka_topic'

@Injectable()
export class KafkaProducerService implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject('KAFKA_PRODUCER') private readonly producerClient: ClientKafka,
  ) {}
  onModuleDestroy() {
    this.producerClient.close()
  }
  onModuleInit() {
    this.producerClient.connect()
  }
  async sendMessage(topic: string, data) {
    try {
      await this.producerClient.emit(topic, data)
    } catch (error) {
      throw error
    }
  }
}
