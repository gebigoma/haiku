const 
  express = require('express'),
  app = express(), 
  logger = require('morgan'),
  mongoose = require('mongoose'),
  PORT = 3000

mongoose.connect('mongodb://localhost/haiku', (err) => {
  console.log(err || "Successfully connectedd to MONGOD")
})

app.use(logger('dev'))
app.use(express.json())

app.use('/api/haikus', haikuRouter)

app.listen(PORT, (err) => {
  console.log(err || `Server running on PORT ${PORT}`)
})

