const db = require("../models");

// Defining methods for the booksController
module.exports = {
  addition: function(req, res) {
    db.User.findOne({ 
        where: { _id: req.body } })
        .then(addLevel => {
            console.log(addLevel);
            res.send(addLevel)
         })
        }
};