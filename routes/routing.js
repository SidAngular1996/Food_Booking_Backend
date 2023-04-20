var express = require('express');
var BuffetBooking = require('../public/javascripts/BuffetBooking');
var RestaurantBL = require('../public/javascripts/RestaurantBL');
var router = express.Router();


router.post('/bookBuffet', function (req, res, next) {
  var buffetBooking = BuffetBooking.toObject(req.body);
  RestaurantBL.bookBuffet(buffetBooking).then(function (bookingId) {
    res.json({ "message": " Buffet booked with booking id: " + bookingId })
  }).catch(function (err) {
    next(err);
  })
})

router.get('/fetchBooking/:bId', function (req, res, next) {
  RestaurantBL.fetchBooking(req.params.bId).then(function (bookingDetails) {
    res.json(bookingDetails)
  }).catch(function (err) {
    next(err);
  })
})

module.exports = router;
