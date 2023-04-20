var Validator = require('../javascripts/Validator');

describe('Validate date', function(){
    it('Entered date less than System date', function(){
        try {
            Validator.validateDate(new Date(2017,5,13));
        }catch(error){
            expect(error.message).toEqual("Booking date cannot be before today");
        }
    });

    it('Entered date greater than System date', function(){
        expect(Validator.validateDate(new Date(2019,5,13))).toBeUndefined();
    });

})