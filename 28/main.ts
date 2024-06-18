// Set a value for the variable age
let age: number = 30;  // You can change this value to test different cases

// If-else chain to determine the stage of life
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else if (age >= 65) {
    console.log("The person is an elder.");
}
