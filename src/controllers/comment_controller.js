const Comment = require('../models/comment_model');

const addComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addComment,
};
