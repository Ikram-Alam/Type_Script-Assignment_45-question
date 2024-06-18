// Create an array of usernames
var usernames = ['admin', 'Eric', 'John', 'Alice', 'Bob'];
// Function to greet users or handle an empty list
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log("We need to find some users!");
    }
    else {
        // Loop through the array and print a greeting to each user
        for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
            var username = usernames_1[_i];
            if (username === 'admin') {
                console.log("Hello ".concat(username, ", would you like to see a status report?"));
            }
            else {
                console.log("Hello ".concat(username, ", thank you for logging in again."));
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
