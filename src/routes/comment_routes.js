const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment_controller');

router.post('/', commentController.addComment);
router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getCommentById);
router.get('/post/:postId', commentController.getCommentsByPostId);
router.put('/:id', commentController.updateComment);

module.exports = router;
