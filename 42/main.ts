// Define the function make_great to modify the array of magicians
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Define the function show_magicians to print the names of magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
let magician_names: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Call the function make_great to modify the array of magicians
make_great(magician_names);

// Call the function show_magicians to see the modified list of magicians
show_magicians(magician_names);
