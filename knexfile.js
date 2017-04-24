// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/stackD'
  },

  production: {
    client: 'postgresql',
    connection: ""
    }
};
