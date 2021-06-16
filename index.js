const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

app.listen(5000, () => {
  console.log('SERVER IS RUNNING ON PORT 5000');
});
