const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    firtName : {
        type: String,
        required:true
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    bloodGroup: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Patient', patientSchema)