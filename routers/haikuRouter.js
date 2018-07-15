const 
  express = require('express'), 
  router = express.Router(), 
  Haiku = require('../controllers/haikus')

router.get('/', Haiku.index)
router.get('/:id', Haiku.showHaiku)
router.post('/', Haiku.create)
router.patch('/:id', Haiku.update)

module.exports = router