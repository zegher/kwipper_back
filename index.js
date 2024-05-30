// import dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


// create express app
const app = express();
const port = process.env.PORT || 3000;
const mongodbUri = process.env.MONGODB_URI;

// middleware
app.use(cors({origin: 'https://www.kwipper.be'}));
app.use(express.json());
app.use(bodyParser.json());

// connect to database
mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to database');
});

// routes
const usersRouter = require('./routes/api/v1/user');
const assortmentRouter = require('./routes/api/v1/assortment');
const reviewsRouter = require('./routes/api/v1/review');
const twoAssortmentRouter = require('./routes/api/v1/twoassortment');
const tokenRouter = require("./routes/api/v1/token"); 
  

// route handlers
app.use('/api/v1/user', usersRouter);
app.use('/api/v1/assortment', assortmentRouter);
app.use('/api/v1/reviews', reviewsRouter);
app.use('/api/v1/two', twoAssortmentRouter);
app.use('/api/v1/token', tokenRouter);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;