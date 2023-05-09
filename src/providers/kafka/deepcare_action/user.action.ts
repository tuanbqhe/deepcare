import { DbConnectionService } from '../../mysql_connection/mysql_connection.service'
import { CisPartnerService } from './../../../app/cis_partner/cis_partner.service'

export const userAction = async ({ type, data }) => {
  const cisPartnerService = new CisPartnerService(new DbConnectionService())
  const { partner_code } = data
  switch (type) {
    case 'Get':
      const result = await cisPartnerService.getAll(partner_code)
      console.log(result);
      break
  }
}
