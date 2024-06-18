// Define the function city_country
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function city_country with different city-country pairs
let city1 = city_country('Lahore', 'Pakistan');
let city2 = city_country('New York', 'USA');
let city3 = city_country('Tokyo', 'Japan');

// Print the values returned by the function
console.log(city1);
console.log(city2);
console.log(city3);
