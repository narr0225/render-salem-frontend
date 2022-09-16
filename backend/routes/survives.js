const express = require('express')
const router = express.Router()

const {
    getSurvive,
    getSurvives,
    createSurvive,
    deleteSurvives,
    deleteSurvive
} = require('../controllers/surviveController')


// GET all workout
router.get('/',getSurvive)

// GET single workout
router.get('/:id',getSurvives)

// POST all workout
router.post('/',createSurvive)

// DELETE all workout
router.delete('/',deleteSurvives)

// DELETE id
router.delete('/:id',deleteSurvive)

module.exports = router