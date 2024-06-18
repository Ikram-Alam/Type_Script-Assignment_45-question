// Define a variable for each test
let car: string = 'subaru';
let bike: string = 'ducati';
let age: number = 25;
let height: number = 180;
let isRaining: boolean = false;
let temperature: number = 30;
let city: string = 'New York';
let country: string = 'USA';
let fruit: string = 'apple';
let color: string = 'blue';

// True Tests
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is bike == 'ducati'? I predict True.");
console.log(bike == 'ducati');

console.log("Is age > 20? I predict True.");
console.log(age > 20);

console.log("Is height >= 180? I predict True.");
console.log(height >= 180);

console.log("Is isRaining == false? I predict True.");
console.log(isRaining == false);

// False Tests
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

console.log("Is bike == 'harley'? I predict False.");
console.log(bike == 'harley');

console.log("Is age < 18? I predict False.");
console.log(age < 18);

console.log("Is height < 150? I predict False.");
console.log(height < 150);

console.log("Is temperature == 20? I predict False.");
console.log(temperature == 20);

// Additional tests with predictions explained:
console.log("Is city == 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles'); // False because city is 'New York'

console.log("Is country == 'Canada'? I predict False.");
console.log(country == 'Canada'); // False because country is 'USA'

console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == 'banana'); // False because fruit is 'apple'

console.log("Is color == 'red'? I predict False.");
console.log(color == 'red'); // False because color is 'blue'

console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // True because age is 25

console.log("Is height != 170? I predict True.");
console.log(height != 170); // True because height is 180

console.log("Is isRaining == true? I predict False.");
//console.log(isRaining == true); // False because isRaining is false

console.log("Is temperature >= 25? I predict True.");
console.log(temperature >= 25); // True because temperature is 30

console.log("Is city != 'Chicago'? I predict True.");
console.log(city != 'Chicago'); // True because city is 'New York'

console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple'); // True because fruit is 'apple'
