// Define the Book interface
interface Book {
    title: string;
    author: string;
    publicationYear: number;
    genre: string;
}

// Create book objects
const book4: Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    genre: "Fiction"
};

const book5: Book = {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    genre: "Dystopian"
};

const book6: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    genre: "Tragedy"
};

// Store book objects in an array
const library1: Book[] = [book4, book5, book6];

// Correctly handle accessing array elements
const indexToAccess = 3;

if (indexToAccess >= 0 && indexToAccess < library1.length) {
    console.log(library1[indexToAccess]);
} else {
    console.log(`Error: Index ${indexToAccess} is out of bounds.`);
}

// Log the library array to the console
console.log(library1);
