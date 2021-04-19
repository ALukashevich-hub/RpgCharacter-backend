const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// /api/users: GET, POST, DELETE
// /api/users/:id: GET, PUT, DELETE

// router
//   .route('/')
//   .post(UserController.create);

// Create a new blog
router.post("/", UserController.create);
// Retrieve a single user with id
router.get("/:id", UserController.findOne);
module.exports = router;