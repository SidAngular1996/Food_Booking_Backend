var avlDate = require('../javascripts/RestaurantDAL');

describe('Buffet booking', function () {

    it('Booking found', function (done) {
        // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var date= new Date(2018, 4, 17)
        //console.log("Result: ", expect(avlDate.checkDateIsFree(date)));
        var result;
        avlDate.checkDateIsFree(date).then(function (data) {
            result = data;
            // return result;
            done();
            expect(result).toBeFalsy();
        })
    });


    it('Booking not found', function (done) {
        //var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var date = new Date(2019, 8, 17);
        console.log("Result: ", expect(avlDate.checkDateIsFree(date)));
        var result;
        avlDate.checkDateIsFree(date).then(function (data) {
             result = data;
             console.log('inside' + result)
             done();
             expect(result).toBeTruthy();
         })
     });
})