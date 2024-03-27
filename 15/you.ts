//Changing Guest List: You just heard that one of your guests can’t make the dinner,
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let dinnerGuests: string[] = ["Ronaldo", "Babar Azam", "Cris Evan"];

// Print original invitation messages
console.log("Original Invitations:");
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]},\nYou are cordially invited to dinner. We would be honored to have your presence.`);
}

// Replace a guest who can't make it
let indexOfGuestToReplace: number = 1;  // Assuming Ada Lovelace can't make it
dinnerGuests[indexOfGuestToReplace] = "Marie Curie";

// Print new invitation messages
console.log("\nRevised Invitations:");
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]},\nYou are cordially invited to dinner. We would be honored to have your presence.`);
}
