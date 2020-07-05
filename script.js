const game = {
  title: 'Guess the Number!',
 
  biggestNum: 100,
 
  smallestNum: 1,
  playerChoice: null,
  secretNum: null,
  //1. Add a prevGuesses property to the game object initialized to an empty array.
  prevGuesses: [],
  //2. Add a getGuess method to game that prompts the player to enter a guess with a message formatted as: Enter a guess between [smallestNum] and [biggestNum]: Hint- Use a template literal for the prompt message.

  //3. Ensure that the getGuess method returns a value that is:
  //-is a number, not a string
  // -is between smallestNum and biggestNum, inclusive
  // -Hints: This is a great use case for a while loop. parseInt returns NaN if the string cannot be parsed into a number
  getGuess: function() {
  do {
    var guess = parseInt(window.prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `));
  }
  while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum);
  return guess;
  },
//4. From within the play method, invoke the getGuess method and add the new guess to the prevGuesses array
    play: function() {
    this.secretNum = Math.floor(Math.random() * 
       (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      
      do {
        var userInput = this.getGuess();
        this.prevGuesses.push(userInput);
        this.render(userInput, this.secretNum);
       }
      while (userInput !== this.secretNum)
      return "Go home, you won."
      
      
        //6 the play method should end(return) when the guess matches the secretNum
     
    },
   
      
 
  // 5. Add a render method to game that play will call after a guess has been made that alerts:
// -if the secret has been guessed: "Congrats! you guessed the number in [x] guesses!"

// otherwise
// -"Your guess is too [high|low]"
// "Previous guesses: x, x, x, x"

// Hints: render wont be able to access any of play's local variables, e.g., guess, so be sure to pass render any arguments as needed. Template literals not only have interpolation, they honor whitespace - including line breaks! The list of previous guesses can be generated using the array join method.
    
  
    render: function(guess2, secretNum2) {
      if (guess2 === secretNum2) {
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses! Previous guesses: ${this.prevGuesses}`);
    }  else if (guess2 > secretNum2) {
          alert(`Your guess is too high!
          Previous guesses: ${this.prevGuesses}`);
      } else {
          alert(`Your guess is too low!
          Previous guesses: ${this.prevGuesses}`);
      };
    },
    
 
  
};

 game.smallestNum = parseInt(prompt('Enter the smallest value')); 
game.biggestNum = parseInt(prompt('Enter the largest value')); 
console.log(game.play());
/*
Allow the player to continually be prompted to enter their guess of what the secret number is until they guess correctly
If the player has an incorrect guess, display an alert message that informs the player:

Whether their guess is too high, or too low, and...
A list of all the previously guessed numbers (without showing the square brackets of an array)
If the player has guessed the secret number:

Display an alert message that congrats the player and informs them of how many guesses they took
End the game play*/

/*


Bonus: when play is run, immediately prompt the player to enter the smallest and biggest numbers instead of having them pre-set*/
