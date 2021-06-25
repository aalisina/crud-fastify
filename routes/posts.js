const posts = require('../posts');

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
    handler: function (req, res) {
        res.send(posts)
    },
}


const getPostOpts = {
    schema: {
        response: {
            200: Post
        },
    },
    
    handler: function (req, res) {
        const { id } = req.params
        const post = posts.find((post)=> post.id === id)
        res.send(post)
    },
}

function postRoutes (app, options, done) {
    
    app.get('/posts', getPostsOpts)
    
    app.get('/posts/:id', getPostOpts)

    done()
}

module.exports = postRoutes;