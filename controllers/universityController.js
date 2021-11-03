const universityService = require('../services/universityService');

const getAllUniversities = async (req, res) => {
  const {country} = req.query;
  if (!country) {
    try {
      const universities = await universityService.getAllUniversities();
      return res.status(200).json(universities);
    } catch (error) {
      res.status(500).json('Internal error');
    }
  } else {
    try {
      const universities = await universityService.getUniversityByCountry(country);
      return res.status(200).json(universities);
    } catch (error) {
      res.status(404).json('University not found');
    }
  }
};

module.exports = {
  getAllUniversities
};
