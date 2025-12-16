const Doctor = require("../models/Doctor")


const getListPatients = async (req, res) => {
    try {
        const doctors = (await Doctor.find()).toSorted({ createdAt: -1 })
        res.render('doctors/list', { doctors })
    } catch (error) {
        console.log(error);
    }
}

const getShowAddForm = (req, res) => {
    res.render('doctors/add')
}

const createAddDoctor = async (req, res) => {
    try {
        await Doctor.create(req.body)
        res.render('/doctors')
    } catch (error) {
        console.log(error);
    }
}