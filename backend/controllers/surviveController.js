const Workout = require('../models/SurviveModel')
const mongoose = require('mongoose')


//GET all Workout
const getSurvive = async (req,res) => {
    const workouts = await Workout.find({}).sort({createAt: -1})
    res.status(200).json(workouts)
}
//GET a single Workout
const getSurvives = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout =await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}
//Create new Workout
const createSurvive = async (req,res) => {
    const {title} = req.body

    try{
        const workout = await Workout.create({title})
        res.status(200).json(workout)
    }catch (error)
    {
        res.status(400).json({error:error.message})
    }
    
}
//delete a Workout
const deleteSurvives = async (req,res) => {
    // const {id} = req.params

    // if(!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: 'No such workout'})
    // }

    // const workout = await Workout.findByIdAndDelete({_id: id})

    // if(!workout){
    //     return res.status(404).json({error: "No such workout"})
    // }

    // res.status(200).json(workout)
// 
    // const workouts = await Workout.find({}).sort({createAt: -1})
    // workouts.deleteMany({}) ค้างงงไว้้
    
    //////////////////////

    Workout.deleteMany({}, function(err) { /// ถูกต้องงงง
        if (err) {
            res.status(500).send({error: "Could not clead database..."});           
        } else {
            res.status(200).send({message: "All info was deleted succesfully..."});
        }
    });

    ///ถูกต้องงงง

}

const deleteSurvive = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if(!workout){
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}


module.exports  ={
    getSurvive,
    getSurvives,
    createSurvive,
    deleteSurvives,
    deleteSurvive
}