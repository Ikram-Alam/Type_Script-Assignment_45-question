// Define the function describe_city with a default parameter for the country
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function describe_city with different arguments
describe_city('Karachi');
describe_city('London', 'UK');
describe_city('Paris', 'France');
