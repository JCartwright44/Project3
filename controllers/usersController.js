////This should be changed to Mongo syntax...

var db = require('../models');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Routes
// =============================================================
module.exports = {
  login: function(req, res) {
    const { username, password } = req.body;
    db.User
      .findOne({ username })
      .then(dbModel => {
        bcrypt.compare (password, dbModel.password, function(err, same) {
          if (same) {
            console.log(dbModel)
            const id = dbModel._id;
            const add = dbModel.addition;
            const sub = dbModel.subtraction;
            const mult = dbModel.multiplication;
            const div = dbModel.division;
            const token = jwt.sign({
              username: dbModel.username,
              id: dbModel._id
            }, "super-secret");
            return res.json({ id, username, add, sub, mult, div, token })
          } else {
            return res.status(404).json({
              error: "Passord or username not matching"
            })
          }
        })
      })
      .catch(err => res.status(422).json(err));
  },

  signup: function(req, res) {
    const { username, password } = req.body;
    bcrypt.hash(password, 10, function(err, hash) {
      const user = {
        username, 
        password: hash,
        addition: 1, 
        subtraction: 1,
        multiplication: 1, 
        division: 1
      }
  
      db.User
        .create(user)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    });
  },

  update: function(req, res) {
    let { id, type, level } = req.body;
    level = Number(level) + 1
    db.User
      .findOneAndUpdate({"_id": id}, {$set: {[type]: level}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  get: function(req, res) {
    db.User.find({})
      .then(dbModel => {
        const add = dbModel.addition;
        const sub = dbModel.subtraction;
        const mult = dbModel.multiplication;
        const div = dbModel.division;
      })
      return res.json({add, sub, mult, div})
  }
}; 

