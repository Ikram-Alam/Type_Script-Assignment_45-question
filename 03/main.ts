let personName: string = "Ikram Alam";

// Convert to lowercase
let lowercaseName: string = personName.toLowerCase();
console.log(`Lowercase: ${lowercaseName}`);

// Convert to uppercase
let uppercaseName: string = personName.toUpperCase();
console.log(`Uppercase: ${uppercaseName}`);

// Convert to titlecase
let titlecaseName: string = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(`Titlecase: ${titlecaseName}`);
