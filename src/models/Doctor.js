const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    specialization: {
        type: String
    },
    phone:{
        type: String
    },
    fees: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Doctor', doctorSchema)