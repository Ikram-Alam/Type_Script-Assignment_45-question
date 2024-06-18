// Define the function describe_city with a default parameter for the country
function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function describe_city with different arguments
describe_city('Karachi');
describe_city('London', 'UK');
describe_city('Paris', 'France');
