// Define the function make_sandwich to accept an array of sandwich items
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function make_sandwich with different numbers of arguments
make_sandwich('Turkey', 'Cheese', 'Lettuce', 'Tomato');
make_sandwich('Peanut Butter', 'Jelly');
make_sandwich('Ham', 'Swiss Cheese', 'Mustard');
