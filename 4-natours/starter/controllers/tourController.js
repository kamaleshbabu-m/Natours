/* eslint-disable prefer-destructuring */
const Tour = require('../models/tourModel');

exports.getTours = async (req, res) => {
  try {
    console.log(req.query);
    const excludedfields = ['sort', 'limit'];
    const tours = await Tour.find(req.query);

    res.status(200).json({
      statuscode: 200,
      statustype: `Success`,
      Data: tours,
    });
  } catch (err) {
    res.status(400).json({
      statuscode: 400,
      statustype: `Failure`,
      Error: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      statuscode: 201,
      statustype: `Success`,
      Data: newTour,
    });
  } catch (err) {
    if (err.code === 11000) {
      res.status(402).json({
        statuscode: 400,
        statustype: `Duplicate Value`,
        Error: err,
      });
    }

    res.status(400).json({
      statuscode: 400,
      statustype: `Failure`,
      Error: err,
    });
  }
};

exports.getTourbyID = async (req, res) => {
  try {
    const id = req.params.id;
    const tours = await Tour.findById(id);

    res.status(200).json({
      statuscode: 200,
      statustype: `Success`,
      Data: tours,
    });
  } catch (err) {
    res.status(404).json({
      statuscode: 404,
      statustype: `Failure`,
      Error: 'Tour not found for Given ID',
    });
  }
};

exports.editTourbyID = async (req, res) => {
  try {
    console.log(req.body);
    // const tours = await Tour.findByIdandUpdate(req.params.id, req.body, {
    //   new: true,
    // });

    const tours = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(204).json({
      statuscode: 204,
      statustype: `Success`,
      Data: tours,
    });
  } catch (err) {
    res.status(404).json({
      statuscode: 404,
      statustype: `Failure`,
      Error: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    console.log(req.body);

    const tours = await Tour.findByIdAndDelete(req.params.id);
    console.log(`After API:${tours}`);
    res.status(200).json({
      statuscode: 200,
      statustype: `Success`,
      Data: tours,
    });
  } catch (err) {
    res.status(404).json({
      statuscode: 404,
      statustype: `Failure`,
      Error: err,
    });
  }
};
