// const fs = require('fs');
const express = require('express');

const morgan = require('morgan');

const app = express();

const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRoutes');

//1.MIDDLEWARES
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//serving static files
app.use(express.static(`${__dirname}/public`));

app.use(express.json());

app.use((req, res, next) => {
  req.requesttime = new Date().toString();
  next();
});

//2. ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

//3. STARTING THE SERVER
