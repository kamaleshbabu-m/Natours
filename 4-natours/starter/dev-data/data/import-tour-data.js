// eslint-disable-next-line import/no-extraneous-dependencies
// /* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');

const Tour = require('../../models/tourModel');

dotenv.config({ path: '../../config.env' });

const db = process.env.DATABASE;
// const db = 'mongodb+srv://natour:natour123@cluster0.acivfng.mongodb.net/natour?retryWrites=true&w=majority';

mongoose
  .connect(db, {})
  .then((con) => {
    console.log(con.connections);
    console.log('MongoDB connected...');
  })
  .catch((err) => console.log(err));

// GETTING DATA FROM FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));

// IMPORTING DATA INTO MONGODB
const importData = async (req, res) => {
  try {
    const tourData = await Tour.create(tours);
    console.log('Data imported successfully');
    console.log(tourData);
  } catch (err) {
    console.log(err);
  }
};

//DELETING ALL DATA
const deleteData = async (req, res) => {
  try {
    await Tour.deleteMany();
    console.log('Data deleted successfully');
  } catch (err) {
    console.log(err);
  }
};

console.log(`process:${process.argv[2]}`);

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
