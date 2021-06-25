const posts = require('../posts');
const { getPosts, getPost, addPost } = require('../controllers/posts');

// Post Schema
const Post = {
    type: 'object',
    properties: {
        id: { type: 'string'},
        content: { type: 'string'},
        author: { type: 'string'}
    }
}
// Options for getting all posts
const getPostsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                posts: Post,
                },
            },
        },
    handler: getPosts,
}


const getPostOpts = {
    schema: {
        response: {
            200: Post
        },
    },
    
    handler: getPost,
}

const addPostOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['content', 'author'],
            properties: {
                content: { type: 'string'},
                author: { type: 'string'},

            },

        },
        response: {
            201: Post
        },
    },
    
    handler: addPost,
}

function postRoutes (app, options, done) {
    
    // get all posts
    app.get('/posts', getPostsOpts)
    
    // get one post
    app.get('/posts/:id', getPostOpts)

    // add one post 
    app.post('/posts', addPostOpts)

    done()
}

module.exports = postRoutes;