var dinnerGuests = ["Ronaldo", "Babar Azam", "Cris Evan"];
// Print original invitation messages
console.log("Original Invitations:");
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear ".concat(dinnerGuests[i], ",\nYou are cordially invited to dinner. We would be honored to have your presence."));
}
// Inform about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
dinnerGuests.unshift("Marie Curie");
// Add one new guest to the middle of the array
var indexOfMiddleGuest = Math.floor(dinnerGuests.length / 2);
dinnerGuests.splice(indexOfMiddleGuest, 0, "Isaac Newton");
// Use push() to add one new guest to the end of the list
dinnerGuests.push("Galileo Galilei");
// Print new invitation messages
console.log("\nRevised Invitations:");
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear ".concat(dinnerGuests[i], ",\nYou are cordially invited to dinner. We would be honored to have your presence."));
}
