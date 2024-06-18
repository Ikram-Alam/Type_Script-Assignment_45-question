// List of current usernames
var current_users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// List of new usernames
var new_users = ['alice', 'bob', 'Frank', 'Grace', 'Henry'];
// Convert all current usernames to lowercase for case-insensitive comparison
var lowercased_current_users = current_users.map(function (user) { return user.toLowerCase(); });
// Loop through the new_users list to check for availability
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (lowercased_current_users.includes(new_user.toLowerCase())) {
        console.log("The username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
}
