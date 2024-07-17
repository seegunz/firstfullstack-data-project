const mongoose = require('mongoose')

const schema = mongoose.Schema

const dataModel = new schema({
    name:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
    sex:{
        type: String,
        require: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Profile', dataModel)