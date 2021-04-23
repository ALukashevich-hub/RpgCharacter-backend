const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skills.controller');

router.get("/", skillController.get);
router.post("/", skillController.create);
router.get("/:name", skillController.findOne);

module.exports = router;