// Define the function make_great to modify a copy of the array of magicians
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}

// Define the function show_magicians to print the names of magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
let magician_names: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Call the function make_great with a copy of the array of magicians
let great_magician_names: string[] = make_great([...magician_names]);

// Call the function show_magicians to show the original list of magicians
console.log("Original Magicians:");
show_magicians(magician_names);

// Call the function show_magicians to show the modified list of magicians
console.log("\nGreat Magicians:");
show_magicians(great_magician_names);
