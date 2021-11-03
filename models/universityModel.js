const { ObjectId } = require('mongodb');
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

const getUniversityById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const universities = await connect()
    .then((db) => db.collection('universities').findOne(ObjectId(id)));
  return universities;
};

const createUniversity = async (alpha_two_code, web_pages, name, country, domains, state_province) =>
  connect().then((db) =>
    db.collection('universities').insertOne({ alpha_two_code, web_pages, name, country, domains, state_province }))
    .then((result) => result);

const updateUniversity = async ({ id, reqBody }) => {
  if (!ObjectId.isValid(id)) return null;

  const modifyUniversity = await connect().then((db) =>
    db.collection('universities')
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: reqBody },
        { returnOriginal: false },
      ));
  return modifyUniversity.value;
};

const deleteUniversity = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  await connect().then((db) =>
    db.collection('universities')
      .deleteOne(
        { _id: ObjectId(id) },
      ));
};

module.exports = {
  getAllUniversities,
  getUniversityByCountry,
  getUniversityById,
  createUniversity,
  updateUniversity,
  deleteUniversity
};
