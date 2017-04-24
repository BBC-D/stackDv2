const config = require('../knexfile');
const enviorment = process.env.NODE_ENV || 'development';

const pg = require('knex')(config[enviorment]);

module.exports = pg;
