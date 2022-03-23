require('dotenv').config();

module.exports = {
  username: process.env.DB_USER || 'gabriel',
  password: process.env.DB_PASS || 'root1234',
  database: process.env.DB_NAME || 'TRYBE_FUTEBOL_CLUBE',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '3306',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};
