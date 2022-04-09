const { application } = require('express')

const express = require('express')
const app = express()

var port = 3000

app.get('/', (req, res) => {

})

const server = app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

app.get('/app', (req, res) => {
    res.status(200).send("OK")
    res.type("text/plain")
})

app.use(function(req, res) {
    res.status(404).send("Endpoint does not exist")
    res.type("text/plain")
})