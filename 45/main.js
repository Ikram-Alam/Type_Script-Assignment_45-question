// Define the function store_car_info to store information about a car in an object
function store_car_info(manufacturer, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var car_info = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, details_1 = details; _a < details_1.length; _a++) {
        var detail = details_1[_a];
        for (var key in detail) {
            car_info[key] = detail[key];
        }
    }
    return car_info;
}
// Call the function store_car_info with the required information and two additional name-value pairs
var car_info = store_car_info('Toyota', 'Camry', color: 'red', year: 2022);
// Print the object that's returned to ensure all the information was stored correctly
console.log(car_info);
