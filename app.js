const express = require('express')
const app = express()
const router = require('./router/router')
const cors = require('cors')

app.use(express.static(__dirname + "/public"))

app.use('/api', cors())
app.use('/api', router())

app.use('/', (req, res) => {
  res.send("Hello welcome")
})

module.exports = app