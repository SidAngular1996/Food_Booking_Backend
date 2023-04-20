var BuffetBooking = function (bookingId, buffetName, emailId, plateCount, bookedOn){
    this.bookingId = bookingId;
    this.buffetName = buffetName;
    this.emailId = emailId;
    this.plateCount = plateCount;
    this.bookedOn = bookedOn;
}

BuffetBooking.toObject = function(result){
    return new BuffetBooking(result.bookingId, result.buffetName, result.emailId, result.plateCount, new Date(result.bookedOn));
}

module.exports = BuffetBooking;