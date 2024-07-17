const dataModel = require('../model/dataModel')

// creating new data
function posting(req, res) {
    const {name, age, sex} = req.body
    const newData = dataModel.create({name, age, sex})
    try {
        res.status(200).json(newData)
    } catch (error) {
        res.status(400).json({error: error.code})
    }
}

// posting new data
function getting(req, res) {
    res.json({msg: 'getting'})
}

module.exports = { posting, getting}