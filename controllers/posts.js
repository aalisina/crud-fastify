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

const deletePost = (req, res) => {
    const { id } = req.params
    posts = posts.filter((post)=> post.id !== id)
    res.send({message: `Post ${id} has been deleted.`})
};

const updatePost = (req, res) => {
    const { id } = req.params
    const { body } = req
    posts = posts.map((post)=> (post.id === id ? modifyPost(body, post) 
    : post ))

    post = posts.find((post) => post.id === id)
    res.json({post})
};

const modifyPost = (body, post) => {
    if (!body.content & !body.author ) throw new Error('Body cannot be empty');
    
    if (!body.content & body.author) return post = {
        content: post.content,
        id: post.id,
        author: body.author,
    }
    if(!body.author & body.content ) return post = {
        id: post.id,
        author: post.author,
        content: body.content,
    }
}

module.exports = { 
    getPost, 
    getPosts, 
    addPost, 
    deletePost,
    updatePost, 
}