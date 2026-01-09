const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const postRoutes = require('./routes/post_routes');
app.use('/post', postRoutes);

const commentRoutes = require('./routes/comment_routes');
app.use('/comment', commentRoutes);

module.exports = app;
