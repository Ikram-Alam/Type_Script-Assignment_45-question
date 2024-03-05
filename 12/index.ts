let names: string[] = ["IRON MAN", "CAPTAIN AMERICA", "THOR", "HULK", "BLACK WIDOW", "SCARLET WITCH"];
let greetingMessage: string = "Hello, ";

// Print personalized greeting to each person
for (let i = 0; i < names.length; i++) {
    let personalizedMessage: string = `${greetingMessage}${names[i]}!`;
    console.log(personalizedMessage);
}
