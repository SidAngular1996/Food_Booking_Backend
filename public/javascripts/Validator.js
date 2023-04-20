var Validator = {}


Validator.validateDate = function(bookingDate){
    if(bookingDate.getTime() < new Date().getTime()){
        throw new Error("Booking date cannot be before today");
    }
}


module.exports = Validator;