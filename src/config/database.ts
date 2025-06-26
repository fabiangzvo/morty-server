import { Sequelize } from 'sequelize';

import { CONFIG } from "./constants";

const sequelize = new Sequelize(CONFIG.DATABASE_URL, {
  dialect: 'postgres',
  logging: console.log,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  ssl: true,
  dialectOptions: {
    ssl: true
  }
});

export default sequelize;