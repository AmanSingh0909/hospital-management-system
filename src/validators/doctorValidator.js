const createDoctorValidation = [
    body('name')
        .notEmpty()
        .withMessage('Doctor name is required'),

    body('specialization')
        .notEmpty()
        .withMessage('Specialization is required'),

    body('fees')
        .optional()
        .isNumeric()
        .withMessage('Fees must be a number')
]

module.exports = { createDoctorValidation }