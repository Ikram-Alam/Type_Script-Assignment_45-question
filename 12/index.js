var names = ["IRON MAN", "CAPTAIN AMERICA", "THOR", "HULK", "BLACK WIDOW", "SCARLET WITCH"];
var greetingMessage = "Hello, ";
// Print personalized greeting to each person
for (var i = 0; i < names.length; i++) {
    var personalizedMessage = "".concat(greetingMessage).concat(names[i], "!");
    console.log(personalizedMessage);
}
