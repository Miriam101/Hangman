var userInput = prompt("What letter would you like to guess?", "Letter");
var numberGuesses = 10;
var word = "bread";
var hiddenWord = word.length;
hiddenWord = word.replace(/./g, ".");
console.log(hiddenWord);

var guessLetter = function(userLetter) {
  hiddenWord.replace (/./g, "letter");
}


console.log(word.includes("a"));

if (word.includes("a") === true) {
  hiddenWord = hiddenWord.replace(/.3/g,"a");
}

if (userInput === 'b') {
  console.log(hiddenWord = hiddenWord.replace(/....([^0-9])/, "b...."));
} else if (userInput === 'r') {
  console.log(hiddenWord = hiddenWord.replace(/....([^0-9])/, ".r..."));
} else if (userInput === 'e') {
  console.log(hiddenWord = hiddenWord.replace(/....([^0-9])/, "..e.."));
} else if (userInput === 'a'){
  console.log(hiddenWord = hiddenWord.replace(/....([^0-9])/, "...a."));
} else if (userInput === 'd') {
  console.log(hiddenWord = hiddenWord.replace(/....([^0-9])/, "....d"));
} else {
  console.log("Sorry thats invalid letter");
  numberGuesses = numberGuesses - 1;
}

console.log(hiddenWord);
