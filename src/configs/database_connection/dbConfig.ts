import * as dotenv from 'dotenv';
dotenv.config();
export const DBConfig = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [],
  synchronize: false,
  name: process.env.MYSQL_CONNECTION_NAME,
};
