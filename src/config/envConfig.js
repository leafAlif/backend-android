require('dotenv').config();

const envConfig = {
  // NODE
  NODE_ENV: process.env.NODE_ENV,
  SECRET: process.env.SECRET,
  PORT: process.env.PORT,
  KEY_CRYPTO: process.env.KEY_CRYPTO,
  SSL_EMAIL: process.env.SSL_EMAIL,
  PORT_EMAIL: process.env.PORT_EMAIL,
  // POSTGRES
  PG_DB_HOST: process.env.PG_DB_HOST,
  PG_DB_USER: process.env.PG_DB_USER,
  PG_DB_PASSWORD: process.env.PG_DB_PASSWORD,
  PG_DB_NAME: process.env.PG_DB_NAME,
  PG_DB_PORT: process.env.PG_DB_PORT,
  PG_MAX: process.env.PG_MAX,
  PG_IDLE_TIMEOUT: process.env.PG_IDLE_TIMEOUT,
  API_KEY: process.env.API_KEY,
  API_URL: process.env.API_URL,
};

module.exports = { envConfig };
