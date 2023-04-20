var BuffetBooking = require('./BuffetBooking');
var Buffet = require('./Buffet');
var RestaurantDAL = require('./RestaurantDAL')
var Validator = require('./Validator');

var RestaurantBL = {}
RestaurantBL.bookBuffet = function (buffetBooking) {
    console.log("BL: ", buffetBooking)
    Validator.validateDate(buffetBooking.bookedOn);
    return RestaurantDAL.checkDateIsFree(buffetBooking.bookedOn).then(function (bookingObj) {
        if (bookingObj) {
            throw new Error("Buffet is already booked on this date!");
        }
        else {
            promise = RestaurantDAL.bookBuffet(buffetBooking);
            return promise;
        }
    }).then(function (buffetBooking) {
        if (!buffetBooking) {
            throw new Error("Error in saving details!");
        }
        else
            return buffetBooking[0].bookingId;
    })
}

RestaurantBL.fetchBooking = function (bId) {
    return RestaurantDAL.fetchBooking(Number(bId)).then(function (bookingData) {
        if (bookingData == null) {
            throw new Error("Reservation for booking Id: " + bId + " is not found!")
        }
        else {
            return BuffetBooking.toObject(bookingData);
        }
    })
}

module.exports = RestaurantBL;