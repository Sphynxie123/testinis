const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const placesWeatherRouter = require('./routes/api/v1/weather');
const placesWeather = require('./routes/api/v1/placesWeather');



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// https://expressjs.com/en/starter/static-files.html
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/weather', placesWeatherRouter);
app.use('/api/v1/weather', placesWeather);


module.exports = app;
