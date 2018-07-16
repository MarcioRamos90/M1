const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/auth', (req, res) => {
  const { username, password } = req.body;
  console.log(password)
  res.send(`olá ususário ${username} !`);
});

app.listen(3000);
