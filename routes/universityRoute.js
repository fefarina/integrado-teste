const express = require('express');
const universityController = require('../controllers/universityController');

const router = express.Router();
const routeId = '/universities/:id';

router.post('/universities', universityController.createUniversity);
router.get('/universities', universityController.getAllUniversities);
router.get(routeId, universityController.getUniversityById);

module.exports = router;
