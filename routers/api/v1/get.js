const express = require('express')
const router = express.Router()



//show text saying "Hello World!" when the user goes to /api/v1/get
router.get('/', (req, res) => {
  res.send('Hello World!')
})