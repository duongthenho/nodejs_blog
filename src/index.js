const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const morgan = require('morgan');

const app = express();
const port = 3000;

//Static file
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(express.urlencoded({extended : true}));
app.use(express.json());


//HTTP logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/trang-chu', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});
app.get('/search', (req, res) => {
  res.render('search');
});
app.post('/news', (req, res) => {
  res.render('search');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});