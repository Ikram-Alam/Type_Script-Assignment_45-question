// Create an array of usernames
let usernames: string[] = ['admin', 'Eric', 'John', 'Alice', 'Bob'];

// Function to greet users or handle an empty list
function greetUsers(usernames: string[]) {
    if (usernames.length === 0) {
        console.log("We need to find some users!");
    } else {
        // Loop through the array and print a greeting to each user
        for (let username of usernames) {
            if (username === 'admin') {
                console.log(`Hello ${username}, would you like to see a status report?`);
            } else {
                console.log(`Hello ${username}, thank you for logging in again.`);
            }
        }
    }
}

// Initial call with users
greetUsers(usernames);

// Remove all usernames from the array
usernames = [];

// Call again with an empty array
greetUsers(usernames);
