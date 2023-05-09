import { Injectable } from '@nestjs/common'

import { kafkaTopics } from '../../configs/kafka_topic'

import { BENH_NHAN } from './entity/BENH_NHAN.entity'
import { DAN_TOC } from './entity/DAN_TOC.entity'
import { DbConnectionService } from '../../providers/db_connection/db_connection.service'
import { KafkaProducerService } from './../../providers/kafka/kafka_producer/kafka_producer.service'

@Injectable()
export class PartnerService {
  constructor(
    private readonly DbConnectionService?: DbConnectionService,
    private readonly kafkaProducerService?: KafkaProducerService,
  ) {}
  async getSpecificConnection({ partner_code }) {
    try {
      const connection =
        this.DbConnectionService.getSpecificConnection(partner_code)
      await this.kafkaProducerService.sendMessage(
        kafkaTopics.deepcare.lay_benh_nhan,
        {
          type: 'Get',
          data: { message: { name: 'phung' }, partner_code: 'b_partner' },
        },
      )
      return await connection.getRepository(BENH_NHAN).find({})
    } catch (error) {
      throw error
    }
  }
}
