var letter = userInput;
var userInput = prompt("What letter would you like to guess?", userInput);
var numberGuesses = 10;
var word = "bread";
var hiddenWord = word.length;
hiddenWord = word.replace(/./g, ".");
console.log(hiddenWord);
console.log(userInput);

function makeGuess (guess) {
  let correct = false;
}
// for (let i = 0; i < word.length; i++) {
//   if (word[i] === guess) {
//     correct = true;
//     hiddenWord[i] = guess;
//     }
//   }
// }


word = word[Math.floor(Math.random() * word.length)];
//console.log(word);


while (remainingLetters > 0) {
  // Game code goes here
  // Show the player their progress
  // Take input from the player
  // Update answerArray and remainingLetters for every correct guess
}



//notes
const maxGuesses = 10;

//store in golbal varaiales
let hidden = [];
let missed = [];
let numGuesses = 0;

if (userInput === "a") {
  console.log("wrong");
}
