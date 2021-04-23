const mongoose  = require('mongoose');
const { Skill } = require("../models/skill.model");

exports.create = (req, res) => {
    // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!"});
    return;
  }

  // Create a skill
  const skill = new Skill({
      name: req.body.name,
      descriptions: req.body.descriptions,
  });

  // Save skill in the database
  skill
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

// Find all
exports.get = (req, res) => {
    Skill.find()
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found skills " });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving skills" });
      });

};

// Find a single skill
exports.findOne = (req, res) => {
  const name = req.params.name;
  Skill.findOne({ name: name })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found skill with name " + name });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving skill with name=" + name });
    });

};
