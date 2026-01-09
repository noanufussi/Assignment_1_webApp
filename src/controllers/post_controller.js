const Post = require('../models/post_model');

const getAllPosts = async (req, res) => {
    try {
        const sender = req.query.sender; 
        let posts;

        if (sender) {
            posts = await Post.find({ sender: sender });
        } else {
            posts = await Post.find();
        }

        res.status(200).send(posts);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post) {
            res.status(200).send(post);
        } else {
            res.status(404).send("Post not found");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const addPost = async (req, res) => {
    console.log("Request body received:", req.body); 
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        console.log("Error saving post:", error.message); 
        res.status(400).send(error.message);
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    addPost
};