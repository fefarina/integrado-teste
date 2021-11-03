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

const getUniversityById = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const universityId = await universityService.getUniversityById(id);
    console.log(id);

    if (!universityId) return res.status(404).json('University not found');
    res.status(200).json(universityId);
  } catch (error) {
    res.status(500).json('Internal Error');
    console.log(error);
  }
};

const createUniversity = async (req, res, next) => {
  try {
    const { alpha_two_code, web_pages, name, country, domains, state_province } = req.body;
    const newUniversity = await universityService.createUniversity(alpha_two_code, web_pages, name, country, domains, state_province, {upsert:true});

    res.status(201).json({
      newUniversity,
    });
  } catch (error) {
    res.status(500).json('Internal Error');
    console.log(error);
  }
  next();
};

module.exports = {
  getAllUniversities,
  getUniversityById,
  createUniversity,
};
