const app = require('fastify')({logger: true})
const PORT = process.env.PORT || 5000
// Get all posts
app.get('/', (req, res) => {
    res.send({message: "Welcome to a fastify api."});
});

// Get one post
app.register(require('./routes/posts'));
app.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger:{
        info: {
            title: 'Fastify api'
        }
    }
})


const start = async ()=> {
    try {
        await app.listen(PORT);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    };
};
start()