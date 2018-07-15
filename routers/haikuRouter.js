const 
  express = require('express'), 
  router = express.Router(), 
  Haiku = require('../controllers/haikus')

router.get('/', Haiku.index)

router.post('/', Haiku.create)

module.exports = router