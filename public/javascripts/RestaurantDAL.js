var BuffetBooking = require('./BuffetBooking');
var Buffet = require('./Buffet');
var validate = require('./Validator')
var utility = require('./Utility')

var RestaurantDAL = {}
RestaurantDAL.generateId = function () {
    return utility.getConnection().then(function (db) {
        var my_collection = db.collection('BuffetBooking');
        return my_collection.distinct("bookingId").then(function (ids) {
            console.log("Data array", ids)
            var bId = Math.max(...ids);
            console.log("Booking Id", bId + 1);
            return bId + 1;
        })
    })
}

RestaurantDAL.checkDateIsFree = function (date) {
    var temp = utility.formatDate(date);
    return utility.getConnection().then(function (database) {
        return database.collection('BuffetBooking').findOne({ "bookedOn": temp }).then(function (bookingData) {
            return bookingData;
        })
    })
}

RestaurantDAL.bookBuffet = function (reservation) {
    return utility.getConnection().then(function (database) {
        var temp = utility.formatDate(reservation.bookedOn);
        return RestaurantDAL.generateId().then(function (id) {
            return database.collection('BuffetBooking').insert({ "bookingId": id, "buffetName": reservation.buffetName, "emailId": reservation.emailId, "plateCount": reservation.plateCount, "bookedOn": temp })
        }).then(function (booked) {
            console.log("Last DAL: ", booked)
            return booked.ops;
        })
    })
}

RestaurantDAL.fetchBooking = function (bId) {
    return utility.getConnection().then(function (database) {
        return database.collection('BuffetBooking').findOne({ "bookingId": bId }).then(function (data) {
            return data;
        })
    })
}

module.exports = RestaurantDAL;

