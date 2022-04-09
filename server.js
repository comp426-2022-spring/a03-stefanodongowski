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

app.get('/app/flip', (req, res) => {
    res.status(200).json({ "flip" : coinFlip()})
})

app.get('/app/flips/:number', (req, res) => {
    var flips = coinFlips(req.params.number);
    res.status(200).json({ "raw" : flips,
                           "summary" : countFlips(flips)})
})

app.get('/app/flip/call/:call', (req, res) => {
    var flip = flipACoin(req.params.call)
    res.status(200).json(flip)
})

app.use(function(req, res) {
    res.status(404).send("Endpoint does not exist")
    res.type("text/plain")
})

function coinFlip() {
    var flip = Math.random();
    if (flip < 0.5) {
      return "tails"
    }
    return "heads"
}

function coinFlips(numFlips) {
    var flips = new Array();
    for (let i=0;i<numFlips;i++) {
      flips.push(coinFlip());
    }
    return flips;
}

function countFlips(array) {
    var heads = 0;
    var tails = 0;
    for (const flip of array) {
      (flip === "heads") ? heads ++ : tails ++;
}
    return { "tails":tails, "heads":heads }
  }

function flipACoin(call) {
    const flip = coinFlip();
    const result = (call === flip) ? true : false;
    return { "call": call, "flip":flip, "result":result }
}