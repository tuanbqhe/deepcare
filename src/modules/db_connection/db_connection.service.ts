import { Injectable, BadRequestException } from '@nestjs/common';
import { Connection, createConnection, getConnectionManager } from 'typeorm';

import { DAN_TOC } from './entity/DAN_TOC.entity';
import { BENH_NHAN } from './entity/BENH_NHAN.entity';

@Injectable()
export class DbConnectionService {
  async getAllPartnerConnection(partner_code: string) {
    try {
      const connection = this.getSpecificConnection(partner_code);
      const query = `SELECT * FROM ( select * from deepcare_partner where STATUS) as pd
      join (select * from partner_db_connection where STATUS) as pc on pd.ID = pc.PARTNER_ID`;
      const result = await connection.query(query);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getPartnerConnection(admin_code: string, partner_code: string) {
    try {
      const connection = this.getSpecificConnection(admin_code);
      const query = `SELECT * FROM ( select * from deepcare_partner where STATUS and PARTNER_CODE = '${partner_code}') as pd
      join (select * from partner_db_connection where STATUS) as pc on pd.ID = pc.PARTNER_ID`;
      const result = await connection.query(query);
      return result;
    } catch (error) {
      throw error;
    }
  }

  getSpecificConnection(partner_code: string) {
    try {
      if (!partner_code)
        throw new BadRequestException('partner_code is required');
      getConnectionManager().connections.map((con) => console.log(con.name));
      const connection = getConnectionManager().get(partner_code);
      if (!connection?.isConnected) {
        throw new BadRequestException('This connection was not connected');
      }
      return connection;
    } catch (error) {
      throw error;
    }
  }
  closeSpecificConnection(partner_code: string) {
    try {
      getConnectionManager().get(partner_code).close();
      return { message: `Closed ${partner_code}` };
    } catch (error) {
      throw error;
    }
  }
  async reConnectionSpecificConnection(partner_code: string) {
    try {
      this.getSpecificConnection(partner_code).close();
      const connectionInfo = await this.getPartnerConnection(
        process.env.MYSQL_CONNECTION_NAME,
        partner_code,
      );
      const { host, port, user, password, database } = connectionInfo[0];
      await createConnection({
        type: 'mysql',
        host,
        port,
        username: user,
        password,
        database,
        entities: [DAN_TOC, BENH_NHAN],
        synchronize: false,
        name: partner_code,
      });

      return { message: `Reconencted ${partner_code}` };
    } catch (error) {
      throw error;
    }
  }
  async addConnection(dbConfig) {
    try {
      const connection = getConnectionManager().connections.find(
        (con) => con.name === dbConfig.database && con.isConnected,
      );
      if (!connection) {
        dbConfig['name'] = dbConfig.database;
        dbConfig['entities'] = [BENH_NHAN];
        const connection = await createConnection(dbConfig);
        if (connection) return { message: 'Created connection' };
      } else throw new BadRequestException('This connection already existed');
    } catch (error) {
      throw error;
    }
  }
}
