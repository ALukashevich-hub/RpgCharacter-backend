const mongoose  = require('mongoose');
const User = require("../models/user.model");

exports.create = (req, res) => {
    // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!"});
    return;
  }

  // Create a user
  const user = new User({
    ...{
      fullname,
      login,
      password,
      birthday,
    } = req.body, ...{ _id: new mongoose.Types.ObjectId() }
  });

  // Save user in the database
  user
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
};

// Find a single user with an id
exports.findOneById = (req, res) => {
    const id = req.params.id;
    User.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found user with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving user with id=" + id });
      });

};

// Find a single user
exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findOne({ login: id })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found user with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving user with id=" + id });
    });

};
