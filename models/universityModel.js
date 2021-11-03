const connect = require('./connection');

const getAllUniversities = async () => {
  const universities = await connect()
    .then((db) => db.collection('universities').find().limit(20).skip(20).toArray());
  return universities;
};

const getUniversityByCountry = async (countryName) => {
  const universities = await connect()
    .then((db) => db.collection('universities').find(
      {$and: [{'country': new RegExp(countryName, 'i')}]}
    ).toArray());
  return universities;
};

module.exports = {
  getAllUniversities,
  getUniversityByCountry
};
