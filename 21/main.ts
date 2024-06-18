// Define the Book interface
interface Book {
    title: string;
    author: string;
    publicationYear: number;
    genre: string;
}

// Create book objects
const book1: Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    genre: "Fiction"
};

const book2: Book = {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    genre: "Dystopian"
};

const book3: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    genre: "Tragedy"
};

// Store book objects in an array
const library: Book[] = [book1, book2, book3];

// Log the library array to the console
console.log(library);
