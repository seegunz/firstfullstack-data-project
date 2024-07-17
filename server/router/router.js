const express = require('express')
const { getting, posting } = require('../controller/control')

const router = express.Router()

router.post('/', posting)

router.get('/', getting)

module.exports = router