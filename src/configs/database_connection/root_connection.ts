import { createConnection } from 'typeorm';

async function connectToDatabases() {
  const originalConnection = await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3002,
    username: 'root',
    password: '123',
    database: 'his_deepcare_catalog',
  });
  return originalConnection;
}
export const connection = connectToDatabases();
