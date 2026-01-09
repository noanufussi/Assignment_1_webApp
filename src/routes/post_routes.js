const express = require('express');
const router = express.Router();
const postController = require('../controllers/post_controller');

router.get('/', postController.getAllPosts); 
router.post('/', postController.addPost);
router.get('/:id', postController.getPostById);
router.put('/:id', postController.updatePost);

module.exports = router;