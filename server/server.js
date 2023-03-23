require('dotenv').config()

const workoutRoutes = require('./routes/workouts')

const express = require('express')
const app = express()

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next();
})

//routes
app.use("/api/workouts",workoutRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on PORT:', process.env.PORT)
})