const express = require('express');
const router = express.Router()
const { createWorkout,getWorkout,getWorkouts } = require('../controllers/workoutControllers')


router.get('/', getWorkouts)
 
//get a single workout
router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a single workout'})
})

router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a workout'})
})

module.exports = router