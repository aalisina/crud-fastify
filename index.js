const app = require('fastify')({logger: true})
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send({message: "Welcome to a fastify api."})
})

const start = async ()=> {
    try {
        await app.listen(PORT)
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}
start()