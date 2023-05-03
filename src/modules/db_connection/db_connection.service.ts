import { Injectable, BadRequestException } from '@nestjs/common';
import { Connection, createConnection, getConnectionManager } from 'typeorm';

import { DAN_TOC } from './entity/DAN_TOC.entity';
import { BENH_NHAN } from './entity/BENH_NHAN.entity';

@Injectable()
export class DbConnectionService {
  async getAllPartnerConnection(dbName: string) {
    try {
      const connection = this.getSpecificConnection(dbName);
      const query = `SELECT * FROM ( select * from deepcare_partner where STATUS) as pd
      join (select * from partner_db_connection where STATUS) as pc on pd.ID = pc.PARTNER_ID`;
      const result = await connection.query(query);
      return result;
    } catch (error) {
      throw error;
    }
  }

  getSpecificConnection(dbName: string) {
    try {
      getConnectionManager().connections.map((con) => console.log(con.name));
      const connection = getConnectionManager().get(dbName);
      if (!connection?.isConnected) {
        throw new BadRequestException('This connection was not connected');
      }
      return connection;
    } catch (error) {
      throw error;
    }
  }
  reloadSpecificConnection(dbName: string) {
    try {
      return getConnectionManager().get(dbName).close();
    } catch (error) {
      throw error;
    }
  }
  reConncetionSpecificConnection(dbName: string) {
    try {
      return getConnectionManager().get(dbName).connect();
    } catch (error) {
      throw error;
    }
  }
  async addConnection(dbConfig) {
    try {
      const connection = getConnectionManager().connections.find(
        (con) => con.name === dbConfig.database,
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
