// Update with your config settings.
require('dotenv').config();
const pg = require('pg');
pg.defaults.ssl = true;
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/stackD'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
    }
};
