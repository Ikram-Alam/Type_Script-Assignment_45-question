//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
var dinnerGuests = ["Marie Curie", "Albert Einstein", "Ada Lovelace", "Isaac Newton", "Nelson Mandela", "Galileo Galilei"];
// Print the number of people being invited to dinner
console.log("Number of people invited to dinner: ".concat(dinnerGuests.length));
// Print original invitation messages
console.log("Original Invitations:");
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear ".concat(dinnerGuests[i], ",\nYou are cordially invited to dinner. We would be honored to have your presence."));
}
// Inform that only two people can be invited for dinner
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Remove guests until only two names remain in the list
while (dinnerGuests.length > 2) {
    var removedGuest = dinnerGuests.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print invitation messages to the two people still on the list
console.log("\nInvitations to Remaining Guests:");
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear ".concat(dinnerGuests[i], ",\nYou are still invited to dinner. We hope to see you there!"));
}
// Remove the last two names from the list to make it empty
dinnerGuests.pop();
dinnerGuests.pop();
// Print to ensure an empty list
console.log("\nFinal Guest List:", dinnerGuests);
