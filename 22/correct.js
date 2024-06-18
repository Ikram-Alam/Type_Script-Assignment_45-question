// Create book objects
var book4 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    genre: "Fiction"
};
var book5 = {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    genre: "Dystopian"
};
var book6 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    genre: "Tragedy"
};
// Store book objects in an array
var library1 = [book4, book5, book6];
// Correctly handle accessing array elements
var indexToAccess = 3;
if (indexToAccess >= 0 && indexToAccess < library1.length) {
    console.log(library1[indexToAccess]);
}
else {
    console.log("Error: Index ".concat(indexToAccess, " is out of bounds."));
}
// Log the library array to the console
console.log(library1);
