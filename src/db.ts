import { DataSource } from "typeorm";
import { DB_USERNAME, DB_PASSWORD, DB_PORT, DB_HOST, DB_NAME } from './config';
import { Users } from "./Entities/User";


export const AppDataSource = new DataSource({
  type: "mysql",
  username: DB_USERNAME,
  password: DB_PASSWORD,
  port: Number(DB_PORT),
  host: DB_HOST,
  database: DB_NAME,
  entities: [Users],
  // busca las entidades y crea las tablas
  synchronize: false,
  ssl: false,
});

// Permitir al usuario conectarse mediante user y password
// ALTER USER 'alex'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
