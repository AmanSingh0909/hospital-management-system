const express = require("express")
const { getAlllistPatientsController, getShowAddForm, createAddPatient } = require("../controllers/patientController")
const router = express.Router()

// list all patients
router.get("/", getAlllistPatientsController)

// Show add patient form
router.get('/add', getShowAddForm)

// Add patient
router.post("/add", createAddPatient)

module.exports = router