const express = require('express')
const router = express.Router()
const controller = require('../controles/controller')

router.get('/', controller.Index)

module.exports = router