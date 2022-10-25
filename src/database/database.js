import Sequelize from "sequelize";
import { config } from "dotenv";
config({ path: process.ENV });

export const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
});