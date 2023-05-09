import { Controller, Get } from '@nestjs/common'
import { KafkaProducerService } from './kafka_producer.service'

@Controller('kafka-producer')
export class KafkaProducerController {
  constructor(private readonly KafkaProducerService: KafkaProducerService) {}
  @Get()
  getUser() {
    this.KafkaProducerService.sendMessage('lay_benh_nhan', { name: 'tuan' })
  }
}
