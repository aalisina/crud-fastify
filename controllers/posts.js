const posts = require('../posts');

const getPosts = (req, res) => {
    res.send(posts);
};

const getPost = (req, res) => {
    const { id } = req.params
    const post = posts.find((post)=> post.id === id)
    res.send(post)
};

module.exports = { 
    getPost, 
    getPosts 
}