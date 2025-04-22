const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const connectDB = require('./config/db');

// load config
dotenv.config({path: './config/config.env'});

connectDB();


const app = express();
// logging
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
// handlebars
app.engine('.hbs', engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// routes

app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`server running on ${process.env.NODE_ENV} mode on port ${PORT}`)
);