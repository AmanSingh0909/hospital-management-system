const Doctor = require("../models/Doctor")


const getListDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find().sort({ createdAt: -1 })
        res.render('doctors/list', { doctors })
    } catch (error) {
        console.log("Error fetching doctors", error);
        res.status(500).send("Server Error")
    }
}

const getShowAddForm = (req, res) => {
    res.render('doctors/add')
}

const createAddDoctor = async (req, res) => {
    try {
        await Doctor.create(req.body)
        res.redirect('/doctors')
    } catch (error) {
        console.log("Error adding doctor", error);
        res.status(400).send("Invalid Doctor Data")
    }
}

module.exports = { getListDoctors, getShowAddForm, createAddDoctor }