const express = require('express');
const router = express.Router();
const usersRoutes = require('./users.route');
const skillsRoutes = require('./skills.route');

router.use('/users', usersRoutes);
router.use('/skills', skillsRoutes);

module.exports = router;