// List of current usernames
let current_users: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// List of new usernames
let new_users: string[] = ['alice', 'bob', 'Frank', 'Grace', 'Henry'];

// Convert all current usernames to lowercase for case-insensitive comparison
let lowercased_current_users: string[] = current_users.map(user => user.toLowerCase());

// Loop through the new_users list to check for availability
for (let new_user of new_users) {
    if (lowercased_current_users.includes(new_user.toLowerCase())) {
        console.log(`The username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}
