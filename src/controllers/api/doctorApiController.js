const Doctor = require("../../models/Doctor");

// GET al doctors (API)
const getDoctor = async (req, res) => {
    try {
        const doctors = (await Doctor.find()).toSorted({ createdAt: -1 })
        res.status(200).json(doctors)
    } catch (error) {
        console.log('Get Doctor API Error:', error.message);
        res.status(500).json({
            message: 'Failed to fetch doctors'
        })
    }
}

const createDoctor = async (req, res) => {
    try {
        const { name, specialization, phone, fees } = req.body

        if (!name || !specialization) {
            return res.status(400).json({
                message: 'Name and specialization are required'
            })
        }

        const doctor = await Doctor.create({
            name,
            specialization,
            phone,
            fees
        })

        res.status(201).json(doctor)
    } catch (error) {
        console.log('Create Doctor API Error:', error.message);
        res.status(500).json({
            message: 'Failed to create doctor'
        })
    }
}

module.exports = { getDoctor, createDoctor}