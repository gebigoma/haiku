const Haiku = require('../model/Haiku')

exports.index = (req, res) => {
  Haiku.find({}, (err, haikus) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: { haikus } })
    }
  })
}

exports.showHaiku = (req, res) => {
  Haiku.findById(req.params.id, (err, haikuFromDB) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: { haikuFromDB } })
    }
  })
}

exports.create = (req, res) => {
  Haiku.create(req.body, (err, newHaiku) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: { newHaiku } })
    }
  })
}

exports.update = (req, res) => {
  // update can be used to update multiple records set with name or title{ _id: req.params.id }, { $set: req.body }, findbyIdandupdate for one id with id. in postman findbyidandupdate you get back the old version of the haiku so add third argument to new:true
  Haiku.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, haikus) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: { haikus } })
    }
  })
}

exports.destroy = (req, res) => {
// remove is for mulitiple objects
  Haiku.findByIdAndRemove(req.params.id, (err, deletedHaiku) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: { deletedHaiku } })
    }
  })
}