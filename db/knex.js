const enviroment = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[enviroment]
const knex = require('knex')(config)

module.exports = knex
