const universityModel = require('../models/universityModel');

const getAllUniversities = async () => {
  const universities = await universityModel.getAllUniversities();
  return universities;
};

const getUniversityByCountry = async (country) => {
  const universities = await universityModel.getUniversityByCountry(country);
  return universities;
};

const getUniversityById = async (id) => {
  const universities = await universityModel.getUniversityById(id);
  return universities;
};

const createUniversity = async (alpha_two_code, web_pages, name, country, domains, state_province) => {
  const newUniversity = await universityModel.createUniversity(alpha_two_code, web_pages, name, country, domains, state_province);
  return newUniversity;
};

const updateUniversity = async ({ id, reqBody }) => {
  const updatedUniversity = await universityModel.updateUniversity({ id, reqBody });
  return updatedUniversity;
};

module.exports = {
  getAllUniversities,
  getUniversityByCountry,
  getUniversityById,
  createUniversity,
  updateUniversity,
};
