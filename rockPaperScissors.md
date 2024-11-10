# Rock Paper Scissors problems

## Computer Choice problem (Solved)

The game will be played against the computer, I will write a function that randomly returns "rock", "paper", or "scissors"

- 1.Create a function named getComputerChoice
- 2. Write the code so that the function will randomly return one of the words

### subproblem is to write a code that returns those words randomly (Solved)

using the Math.random() method to randomly select between 3 numbers and map these numbers so each number resprents a word

if the number returend equals 1 then return the word "rock"
else if the number returend equals 2 then return the word "paper"
else if the returend number equal 3 then return the word "scissors"
and when we invoke the function we get a random value from one of those 3 words

## Human player choice problems (Solved)

First I need to get the user to enter a word and store that word in a variable

make this word case-insensitive by making everything the user enters to lowercase

check if the word is matching the words allowed in this game "rock", "paper", or "scissors"

after the input check. Return that word from the function

## 1 Round play problems (Solved)

create a function with the name playRound that takes two parameters the human choice and the computer choice (created)

Based on the arguments I get I check if the humanChoice beats the computerChoice or the computerChoice beats the humanChoice

If humanChoice is rock and computer is scissors, then the winner is human write that to the console

## Play a game with 5 rounds

Create the playGame function
Move the score varibles to it and move the playRound function to it as well
implement a loop that reapeats 5 times.
inside that loop invoke the playRound function,
after the loop finshed add a condation to check who is the winner and display that as an alert on the screen
