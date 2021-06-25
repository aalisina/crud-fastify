let posts = require('../posts');
const { v4: uuidv4 } = require('uuid');

const getPosts = (req, res) => {
    res.send(posts);
};

const getPost = (req, res) => {
    const { id } = req.params
    const post = posts.find((post)=> post.id === id)
    res.send(post)
};

const addPost = (req, res) => {
    const { content, author } = req.body;
    const newPost = {
        id: uuidv4(),
        content, 
        author
    }

    posts = [...posts, newPost]
    res.code(201).send(newPost)
}

module.exports = { 
    getPost, 
    getPosts, 
    addPost 
}