const express = require('express')
const router = express.Router()
const tokenController = require('../../../controllers/api/v1/tokenController')

router.get('/', tokenController.getTokens)

module.exports = router