var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the function make_great to modify a copy of the array of magicians
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}
// Define the function show_magicians to print the names of magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Create an array of magician's names
var magician_names = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Call the function make_great with a copy of the array of magicians
var great_magician_names = make_great(__spreadArray([], magician_names, true));
// Call the function show_magicians to show the original list of magicians
console.log("Original Magicians:");
show_magicians(magician_names);
// Call the function show_magicians to show the modified list of magicians
console.log("\nGreat Magicians:");
show_magicians(great_magician_names);
