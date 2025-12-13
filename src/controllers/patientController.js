const Patient = require("../models/Patient")

// get list of all patients
const getAlllistPatientsController = async (req, res) => {
    try {
        const patients = await Patient.find()
        res.render('patients/list', { patients })
    } catch (error) {
        console.log('Error fetching patients:', error)
        res.status(500).send("Server Error")
    }
}

// get show add patient form
const getShowAddForm = async (req, res) => {
    res.render('patients/add')
}

// post add new patient
const createAddPatient = async (req, res) => {
    try {
        await Patient.create(req.body)
        res.redirect('/patients')
    } catch (error) {
        console.log("Error adding patient", error.message);
        res.status(400).send("Invalid Patient Data")
    }
}

module.exports = { getAlllistPatientsController, getShowAddForm, createAddPatient }