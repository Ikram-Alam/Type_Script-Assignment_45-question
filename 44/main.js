// Define the function make_sandwich to accept an array of sandwich items
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log("Enjoy your sandwich!");
}
// Call the function make_sandwich with different numbers of arguments
make_sandwich('Turkey', 'Cheese', 'Lettuce', 'Tomato');
make_sandwich('Peanut Butter', 'Jelly');
make_sandwich('Ham', 'Swiss Cheese', 'Mustard');
