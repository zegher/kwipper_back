// import dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// create express app
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// connect to database
mongoose.connect(process.env.MONGODB, {
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

// route handlers
app.use('/api/v1/user', usersRouter);
app.use('/api/v1/assortment', assortmentRouter);
app.use('/api/v1/reviews', reviewsRouter);
app.use('/api/v1/two', twoAssortmentRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;