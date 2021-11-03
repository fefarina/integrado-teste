const axios = require('axios');
require('dotenv').config();

const connection = require('../models/connection');

const baseUrl = 'http://universities.hipolabs.com/search?country=';

const countries = [
  'uruguay', 'suriname', 'brazil', 'argentina', 'chile', 'colombia', 'peru', 'paraguay'
];

let allUniversities = [];

const populateDb = async () => {
  const promises = countries.map(item => axios.get(`${baseUrl}${item}`)
    .then((response) =>(response.data.map(item => {
      allUniversities.push(item);
    }))));

  await Promise.all(promises)
    .then(response => response);

  await connection().then((db) =>
    allUniversities.forEach(element => {
      db.collection('universities').insertOne(element)
        .then((result) => result)
        .catch((error) => console.log(error));
    }));
  return allUniversities;
};

populateDb();
