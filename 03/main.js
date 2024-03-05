var personName = "Ikram Alam";
// Convert to lowercase
var lowercaseName = personName.toLowerCase();
console.log("Lowercase: ".concat(lowercaseName));
// Convert to uppercase
var uppercaseName = personName.toUpperCase();
console.log("Uppercase: ".concat(uppercaseName));
// Convert to titlecase
var titlecaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Titlecase: ".concat(titlecaseName));
