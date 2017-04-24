const express = require('express');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const pg = require('./db/knex');
const app = module.export = express();




app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});
