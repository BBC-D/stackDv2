// Update with your config settings.
require('dotenv').config();
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
