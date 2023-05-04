import { Injectable } from '@nestjs/common'
import { BENH_NHAN } from './entity/BENH_NHAN.entity'
import { DAN_TOC } from './entity/DAN_TOC.entity'
import { DbConnectionService } from '../../providers/db_connection/db_connection.service'

@Injectable()
export class PartnerService {
  constructor(private readonly DbConnectionService: DbConnectionService) {}
  async getSpecificConnection({ partner_code }) {
    try {
      const connection =
        this.DbConnectionService.getSpecificConnection(partner_code)
      return await connection.getRepository(BENH_NHAN).find({})
    } catch (error) {
      throw error
    }
  }
}
