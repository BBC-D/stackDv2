const express = require('express');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const pg = require('./db/knex');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('/public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index');
})


app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});
