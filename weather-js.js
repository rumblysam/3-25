//Here we include the weather-js so we can use it in out Node application.
var weather = require("weather-js");

//Then we use the package to search for the weather at a location
weather.find({ search: "Cidra, PR", degreeType: "F"}, function(err, result) {

    //If there is an error log it.
    if (err) {
        return console.log(err);
    }
    //If there is no error... then print out the weather data.
    //We use JSON.stringify to print the data in the string format.
    //We use the JSON.stringigy argument of "2" to make the format pretty.
    
    console.log(JSON.stringify(result, null, 2));
});