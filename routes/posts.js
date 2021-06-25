const posts = require('../posts');
const { getPosts, getPost } = require('../controllers/posts');

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

function postRoutes (app, options, done) {
    
    app.get('/posts', getPostsOpts)
    
    app.get('/posts/:id', getPostOpts)

    done()
}

module.exports = postRoutes;