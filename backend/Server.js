const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const connection = require('./Db');
const signupUserRoute = require('./Routes/Signupuser');
const loginUserRoute = require('./Routes/Loginuser');
const foodDataRoute = require('./Routes/FoodData');
const ordersRoute = require('./Routes/Orders');
const searchRoute = require('./Routes/Search');
const User = require('./Model/User');

const app = express();
const port = 5000;

app.use(cors({
<<<<<<< HEAD
  origin: 'https://shop-omega-bay.vercel.app',
=======
  origin: '"https://shop-omega-bay.vercel.app"',
>>>>>>> 4a9c622c92faad033c9f1acd079df781666fbe7c
  credentials: true,
  exposedHeaders: ['Authorization'],
}));
app.use(bodyParser.json());
app.use(session({
  secret: 'MynameisEndtoEndYoutubeChannel$#',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: false,
    secure: false,
  },
}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://shop-omega-bay.vercel.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

connection();

app.use('/api', signupUserRoute);
app.use('/api', loginUserRoute);
app.use('/api', foodDataRoute);
app.use('/api', ordersRoute);
app.use('/api', searchRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
