const dataModel = require('../model/dataModel')

// creating new data
async function posting(req, res) {
    const {name, age, sex} = req.body
    const newData = await dataModel.create({name, age, sex})
    try {
        res.status(200).json(newData)
    } catch (error) {
        res.status(400).json({error: error.code})
    }
}

// getting new data
async function getting(req, res) {
    const fetchingData = await dataModel.find({}).sort({createdAt: -1})
    try {
        res.status(200).json(fetchingData)
    } catch (error) {
        res.status(400).json({error: error.code})
    }
}

module.exports = { posting, getting}