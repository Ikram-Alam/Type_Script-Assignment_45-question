// Store the numbers 1 through 9 in an array
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
    // Use an if-else chain to determine the ordinal ending
    let ordinal: string;
    if (number === 1) {
        ordinal = `${number}st`;
    } else if (number === 2) {
        ordinal = `${number}nd`;
    } else if (number === 3) {
        ordinal = `${number}rd`;
    } else {
        ordinal = `${number}th`;
    }
    
    // Print the number with its ordinal ending
    console.log(ordinal);
}
