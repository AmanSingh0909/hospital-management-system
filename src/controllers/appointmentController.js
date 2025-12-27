const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient')

const getListOfAppointment = async (req, res) => {
    try {
        console.log("Loading appointments...");

        const appointments = await Appointment.find()
            .populate('patient')
            .populate('doctor')
            .sort({ date: 1 });

        console.log("Appointments loaded:", appointments.length);

        res.render('appointments/list', { appointments });
    } catch (error) {
        console.log("Error fetching appointments:", error);
        res.status(500).send("Server Error");
    }
};

const getShowAddFormOfAppointment = async (req, res) => {
    try {
        const patients = await Patient.find()
        const doctors = await Doctor.find()
        res.render('appointments/add', { patients, doctors })
    } catch (error) {
        console.log("Error loading form:", error);
    }
}

const createAppointment = async (req, res) => {
    try {
        const { patient, doctor, date, reason } = req.body
        await Appointment.create({ patient, doctor, date, reason })
        res.redirect('/appointments')
    } catch (error) {
        console.log("Error in creating appointment:", error);

    }
}

module.exports = { getListOfAppointment, getShowAddFormOfAppointment, createAppointment }