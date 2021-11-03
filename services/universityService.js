const universityModel = require('../models/universityModel');

const getAllUniversities = async () => {
  const universities = await universityModel.getAllUniversities();
  return universities;
};

const getUniversityByCountry = async (country) => {
  const universities = await universityModel.getUniversityByCountry(country);
  return universities;
};

module.exports = {
  getAllUniversities,
  getUniversityByCountry,
};
