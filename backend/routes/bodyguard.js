const express = require('express')
const router = express.Router()

const {
    getBodyguard,
    getBodyguards,
    createBodyguard,
    deleteBodyguards,
    deleteBodyguard
} = require('../controllers/bodyguardController')


// GET all workout
router.get('/',getBodyguard)

// GET single workout
router.get('/:id',getBodyguards)

// POST all workout
router.post('/',createBodyguard)

// DELETE all workout
router.delete('/',deleteBodyguards)

// DELETE id
router.delete('/:id',deleteBodyguard)

module.exports = router