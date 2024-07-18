const dataModel = require('../model/dataModel')
const mongoose = require('mongoose')

// creating new data
async function posting(req, res) {
    const {name, age, sex} = req.body
    const newData = await dataModel.create({name, age, sex})
    try {
        res.status(200).json(newData)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// getting new data
async function getting(req, res) {
    const fetchingData = await dataModel.find({}).sort({createdAt: -1})
    try {
        res.status(200).json(fetchingData)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// finding a single data

async function singleGet(req, res) {
    const {id} = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no data found"})
    }

    const singleData = await dataModel.findById(id)
 
    if (!singleData) {
       return res.status(400).json({error: "no data found"})
    } 
    else{res.status(200).json(singleData)}
}

// deleting a single data
async function deleteData(req, res) {
    const {id} = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no data found"})
    }

    const deleteProfile = await dataModel.findByIdAndDelete({_id: id})
 
    if (!deleteProfile) {
       return res.status(400).json({error: "no data found"})
    } 
    else{res.status(200).json(deleteProfile)}
}


// updating a single data

module.exports = { posting, getting, singleGet, deleteData }