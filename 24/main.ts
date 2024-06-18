// Define variables for the tests
let car: string = 'subaru';
let bike: string = 'ducati';
let city: string = 'New York';
let fruit: string = 'apple';
let color: string = 'blue';
let age: number = 25;
let height: number = 180;
let temperature: number = 30;
let isRaining: boolean = false;
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ['apple', 'banana', 'cherry'];

// Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

console.log("Is bike == 'harley'? I predict False.");
console.log(bike == 'harley');

console.log("Is bike != 'ducati'? I predict False.");
console.log(bike != 'ducati');

// Tests using the lower case function
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');

console.log("Is city.toLowerCase() == 'los angeles'? I predict False.");
console.log(city.toLowerCase() == 'los angeles');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is age == 25? I predict True.");
console.log(age == 25);

console.log("Is age != 30? I predict True.");
console.log(age != 30);

console.log("Is height > 170? I predict True.");
console.log(height > 170);

console.log("Is height < 190? I predict True.");
console.log(height < 190);

console.log("Is temperature >= 30? I predict True.");
console.log(temperature >= 30);

console.log("Is temperature <= 25? I predict False.");
console.log(temperature <= 25);

// Tests using "and" and "or" operators
console.log("Is age > 20 and height > 170? I predict True.");
console.log(age > 20 && height > 170);

console.log("Is age > 30 or height > 170? I predict True.");
console.log(age > 30 || height > 170);

console.log("Is age > 30 and height > 170? I predict False.");
console.log(age > 30 && height > 170);

console.log("Is age > 20 or height < 170? I predict True.");
console.log(age > 20 || height < 170);

// Test whether an item is in an array
console.log("Is 3 in numbers? I predict True.");
console.log(numbers.includes(3));

console.log("Is 6 in numbers? I predict False.");
console.log(numbers.includes(6));

console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple'));

console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape'));

// Test whether an item is not in an array
console.log("Is 6 not in numbers? I predict True.");
console.log(!numbers.includes(6));

console.log("Is 3 not in numbers? I predict False.");
console.log(!numbers.includes(3));

console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape'));

console.log("Is 'apple' not in fruits? I predict False.");
console.log(!fruits.includes('apple'));
