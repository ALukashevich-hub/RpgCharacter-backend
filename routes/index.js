const express = require('express');
const router = express.Router();
const usersRoutes = require('./users.route');

router.use('/users', usersRoutes);

module.exports = router;