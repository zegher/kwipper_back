
const express = require('express')
const app = express()
const port = 3000
const apiGetter = require('./routers/api/v1/get')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/get', apiGetter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})