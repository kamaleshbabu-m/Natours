/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Tour must have a name'],
    unique: [true, 'Tour Name should be unique'],
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'A Tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A Tour must have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A Tour must have a difficulty'],
  },
  // eslint-disable-next-line prettier/prettier
  ratingsAverage : {
    type: Number,
    default: 4.5,
  },
  // eslint-disable-next-line prettier/prettier
  ratingsQuantity : {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A Tour must have a name']
  },
  priceDiscount: Number,
  summary: {
    type: String,
    required: [true, 'A Tour must have a summary'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A Tour must have a  cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

const Tour = mongoose.model('tour', tourSchema);

module.exports = Tour;
