import { Injectable } from '@nestjs/common'
import { BENH_NHAN } from '../partner/entity/BENH_NHAN.entity'
import { DbConnectionService } from '../../providers/db_connection/db_connection.service'
import { getConnectionManager } from 'typeorm'

@Injectable()
export class CisPartnerService {
  constructor(private readonly DbConnectionService?: DbConnectionService) {}
  async getAll(partner_code) {
    try {
      const connection =
        this.DbConnectionService.getSpecificConnection(partner_code)
      return await connection.getRepository(BENH_NHAN).find({})
    } catch (error) {
      throw error
    }
  }
}
