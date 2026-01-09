const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(`${req.method} request received to ${req.url}`);
    next();
});

const postRoutes = require('./routes/post_routes');
app.use('/post', postRoutes);

module.exports = app;