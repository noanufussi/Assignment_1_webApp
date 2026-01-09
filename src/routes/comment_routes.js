const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment_controller');

router.post('/', commentController.addComment);

module.exports = router;
