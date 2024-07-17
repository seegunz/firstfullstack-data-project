const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>{
    res.json({msg: 'getting'})
})

router.post('/', (req, res)=>{
    res.json({msg: 'posting'})
})

module.exports = router