require('dotenv').config()


const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose');
const express = require('express')
const app = express()

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next();
})

//routes
app.use("/api/workouts", workoutRoutes)

//connect to db 
mongoose.connect(process.env.MONGO_URI)
  .then(() => { 
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on PORT:', process.env.PORT)
    })  
  })
  .catch((error) => {
    console.log(error)
  })

