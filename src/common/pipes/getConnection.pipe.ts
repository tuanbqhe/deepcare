import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { DbConnectionService } from '../../providers/db_connection/db_connection.service'
import { BENH_NHAN } from '../../app/partner/entity/BENH_NHAN.entity'
import { getConnectionManager } from 'typeorm'
import { connect } from 'http2'

@Injectable()
export class GetConnectionPipe implements PipeTransform {
  constructor(
    // private readonly DbConnectionService?: DbConnectionService,
    private readonly entity?: any,
  ) {}
  transform(value: any) {
    console.log('input: ', value)
    const { partner_code } = value
    if (!partner_code) throw new BadRequestException('partner_code is required')
    const connection = getConnectionManager().get(partner_code)
    if (!connection?.isConnected)
      throw new BadRequestException('This connection is closed')
    value.repository = connection.getRepository(this.entity)
    return value
  }
}
// this.DbConnectionService.getSpecificConnection(
//   partner_code,
