import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();

// import routers
import userRouter from './routes/user/user.js';

// initialize
const app = express();

// set environment vars
const PORT = process.env.PORT || 9090;

// set middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get('/', (req, res) => {
  res.send('Welcome server is running');
});

app.use('/api/v1/user', userRouter);

// app listen

app.listen(PORT, () => {
  console.log(`Server is Running on the ${PORT}`.bgGreen.black);
});
