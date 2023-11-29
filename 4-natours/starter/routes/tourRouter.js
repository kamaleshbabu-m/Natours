/* eslint-disable prettier/prettier */
const express = require('express');
// const fs = require('fs');
const tourController = require('../controllers/tourController');

const router = express.Router();

router
      .route('/')
      .get(tourController.getTours)
      .post(tourController.createTour);

router
      .route('/:id')
      .get(tourController.getTourbyID)
      .patch(tourController.editTourbyID)
      .put(tourController.editTourbyID)
      .delete(tourController.deleteTour);

module.exports = router;
