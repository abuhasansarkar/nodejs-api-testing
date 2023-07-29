import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();

// import routers
import userRouter from './routes/user/user.js';
import { errorHandler } from './middleware/errorHandler.js';
import { DBConnect } from './config/db.js';

// initialize
const app = express();

// set environment vars
const PORT = process.env.PORT || 9090;

// set middleware
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get('/', (req, res) => {
  res.send('Welcome server is running');
});

app.use('/api/v1/user', userRouter);

// use error handler

app.use(errorHandler);

// app listen

app.listen(PORT, () => {
  // Database Connect
  DBConnect();

  console.log(`Server is Running on the ${PORT}`.bgGreen.black);
});
