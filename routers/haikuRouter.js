const 
  express = require('express'), 
  haikuRouter = express.Router(), 
  Haiku = require('../controllers/haikusCtrl')

haikuRouter.get('/', Haiku.index)

module.exports = haikuRouter