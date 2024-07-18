const express = require('express')
const { getting, posting, singleGet, deleteData } = require('../controller/control')

const router = express.Router()

router.post('/', posting)

router.get('/', getting)

router.get('/:id', singleGet)

router.delete('/:id', deleteData)

module.exports = router