// Store the numbers 1 through 9 in an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    // Use an if-else chain to determine the ordinal ending
    var ordinal = void 0;
    if (number === 1) {
        ordinal = "".concat(number, "st");
    }
    else if (number === 2) {
        ordinal = "".concat(number, "nd");
    }
    else if (number === 3) {
        ordinal = "".concat(number, "rd");
    }
    else {
        ordinal = "".concat(number, "th");
    }
    // Print the number with its ordinal ending
    console.log(ordinal);
}
