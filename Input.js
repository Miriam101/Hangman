// An array of possible words for hangman, to be loaded from a text file
let possibleWords;

// Variables to hold the target word and the hidden word
let word;
let hidden;

// Counts the number of guesses the user has made so 
// far and an array to store missed guesses
let numGuesses;
let missed;

// Limit the maximum number of guesses before the player loses
const MAX_GUESSES = 8;


// Sets up a new game of hangman
function initialize() {
  
  // Initialize global variables
  hidden = [];
  missed = [];
  numGuesses = 0;
