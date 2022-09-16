require('dotenv').config()
const express = require('express')
const cors = require('cors');
const surviveRouters = require('./routes/survives')
const bodyguardRouters = require('./routes/bodyguard')
const mongoose =require('mongoose')

// express
const app = express()

app.use(cors());

// middelware
app.use(express.json())

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../build')))

//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "../build/index.html"))
//     })
// }

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/ListSurvive',surviveRouters)
app.use('/api/Bodyguard',bodyguardRouters)


//connect db
mongoose.connect(process.env.MONG_GUI)
    .then(() => {
        app.listen(process.env.PORT,()=>{
            console.log('Connect to db listening on port 4000 ')
        })
        
    })
    .catch((error) => {
        console.log(error)
    })

// listen for requrest

