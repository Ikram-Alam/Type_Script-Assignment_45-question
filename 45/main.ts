// Define the function store_car_info to store information about a car in an object
function store_car_info(manufacturer: string, model: string, ...details: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car_info: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let detail of details) {
        for (let key in detail) {
            car_info[key] = detail[key];
        }
    }

    return car_info;
}

// Call the function store_car_info with the required information and two additional name-value pairs
let car_info = store_car_info('Toyota', 'Camry', color: 'red', year: 2022);

// Print the object that's returned to ensure all the information was stored correctly
console.log(car_info);
