const posts = require('../posts');

function postRoutes (app, options, done) {
    
    app.get('/posts', (req, res) => {
        res.send(posts)
    })
    
    app.get('/posts/:id', (req, res) => {
        const { id } = req.params
        const post = posts.find((post)=> post.id === id)
        res.send(post)
    })

    done()
}

module.exports = postRoutes;