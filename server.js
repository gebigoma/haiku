const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  PORT = 3000,
  haikuRouter = require('./routers/haikuRouter')

//  connect to db
mongoose.connect('mongodb://localhost:27017/haiku',  { useNewUrlParser: true }, (err) => {
  console.log(err || "Successfully connectedd to MONGOD")
})


// middleware
app.use(logger('dev'))
app.use(express.json())

// router
app.use('/api/haikus', haikuRouter)

app.listen(PORT, (err) => {
  console.log(err || `Server running on PORT ${PORT}`)
})

