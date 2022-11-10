const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const morgan = require('morgan');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');
//connect to DB     
db.connect();
//Static file
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
