const { application } = require('express')

const express = require('express')
const app = express()

var port = 3000

app.get('/', (req, res) => {

})

const server = app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

app.use(function(req, res) {
    res.status(404).send("Endpoint does not exist")
    res.type("text/plain")
})