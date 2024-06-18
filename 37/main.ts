// Define the function make_shirt with default parameters
function make_shirt(size: string = 'L', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and the message on it is: "${message}"`);
}

// Call the function make_shirt with different arguments
make_shirt();            // Large shirt with default message
make_shirt('M');         // Medium shirt with default message
make_shirt('S', 'Hello World!');  // Small shirt with a different message
