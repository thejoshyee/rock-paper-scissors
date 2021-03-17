
// Weapons for the game
const weapons = ["rock", "paper", "scissors"];

// FUNCTION: Computer randomly chooses Rock, Paper, or Scissors 
function computerPlay() {
    let computerSelection = Math.floor(Math.random() * weapons.length);
    return weapons[computerSelection];    
}
// Store computerPlay() function in variable
const computerSelection = computerPlay();

// FUNCTION: Prompt User to select from Rock Paper or Scissors making it case insensitive
function userPlay() {
    do{
        playerWeapon = prompt("Rock, Paper, or Scissors?").toLowerCase();
        return playerWeapon;
    } while (playerWeapon === 'rock' || playerWeapon === 'paper' || playerWeapon === 'scissors');
}

// initialize scores
let computerScore = 0;
let playerScore = 0;

// Plays 5 Rounds of Rock, Paper, Scissors 
function game(player, computer) {
    for (i = 0; i < 5; i++) {
        let playerSelection = userPlay();
            if (playerSelection === 'paper' && computerSelection === 'paper' || playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'scissors') {
                console.log("Tie!");
            } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                console.log("Player Wins!");
                playerScore++;
            } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
                console.log("Computer Wins!");
                computerScore++;
            } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
                console.log("Player Wins!");
                playerScore++;
            } else if (playerSelection === 'rock' && computerSelection === 'paper') {
                console.log("Computer Wins!");
                computerScore++;
            } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                console.log("Computer Wins!");
                computerScore++
            } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                console.log("Player Wins!");
                playerScore++;
            }
        }
    // Announce the 5 rounds are complete
    console.log("Rounds Complete!");

    // Declare Winner
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Player Score: ${playerScore}`);
    if (playerScore > computerScore) {
        console.log("Player is the Champion!");
    } else {
        console.log("Computer's rule this world!");
    }
}


