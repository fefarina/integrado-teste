const express = require('express');
const universityController = require('../controllers/universityController');

const router = express.Router();
const routeId = '/universities/:id';

router.get('/universities', universityController.getAllUniversities);

module.exports = router;
