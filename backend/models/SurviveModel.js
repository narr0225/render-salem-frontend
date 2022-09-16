const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title:{
        type: String
    },

},{timestamps:true})

module.exports =mongoose.model('Survive',workoutSchema)

