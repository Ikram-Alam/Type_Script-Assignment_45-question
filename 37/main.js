// Define the function make_shirt with default parameters
function make_shirt(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size, " and the message on it is: \"").concat(message, "\""));
}
// Call the function make_shirt with different arguments
make_shirt(); // Large shirt with default message
make_shirt('M'); // Medium shirt with default message
make_shirt('S', 'Hello World!'); // Small shirt with a different message
