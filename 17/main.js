//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
// for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying
// that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them know you’re
// sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
// actually have an empty list at the end of your program.
var dinnerGuests = ["Marie Curie", "Albert Einstein", "Ada Lovelace", "Isaac Newton", "Nelson Mandela", "Galileo Galilei"];
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
