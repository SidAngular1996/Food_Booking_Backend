var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/Reservation_DB';
var utility = {};

utility.formatDate = function (date) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    temp = date.toLocaleDateString('en-US', options);
    console.log("In conversion: ", temp);
    return temp;
}

utility.getConnection = function () {
    return MongoClient.connect(url).then(function (conn) {
        return conn.db();
    }).catch(function (error) {
        throw new Error("Could not connect to Database");
    })
}

module.exports = utility;

