// Weapons for the game
const weapons = ["rock", "paper", "scissors"];

// FUNCTION: Computer randomly chooses Rock, Paper, or Scissors 
function computerPlay() {
    let calc = Math.floor(Math.random() * weapons.length);
    return weapons[calc];    
}

// initialize scores
let computerScore = 0;
let playerScore = 0;

// player selection
let playerSelection;

// Plays 5 Rounds of Rock, Paper, Scissors 
function game(player, computer) {
    if (playerScore < 5 || computerScore < 5) {
    let computerSelection = computerPlay();
            if (playerSelection === 'paper' && computerSelection === 'paper' || 
                    playerSelection === 'rock' && computerSelection === 'rock' || 
                    playerSelection === 'scissors' && computerSelection === 'scissors') {
                        let message = document.getElementById('message').innerHTML = 'Tie!';
            } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                let message = document.getElementById('message').innerHTML = 'Player Wins!';
                    playerScore++;
            } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
                let message = document.getElementById('message').innerHTML = 'Computer Wins!';
                    computerScore++;
            } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
                let message = document.getElementById('message').innerHTML = 'Player Wins!';
                    playerScore++;
            } else if (playerSelection === 'rock' && computerSelection === 'paper') {
                let message = document.getElementById('message').innerHTML = 'Computer Wins!';
                    computerScore++;
            } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                let message = document.getElementById('message').innerHTML = 'Computer Wins!';
                    computerScore++;
            } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                let message = document.getElementById('message').innerHTML = 'Player Wins!';
                    playerScore++;
            } else {
                return 0;
            }

    // Declare Winner
    let realPlayerScore = document.getElementById('playerScore').innerHTML = `${playerScore}`;
    let realComputerScore = document.getElementById('computerScore').innerHTML = `${computerScore}`;

    if (playerScore === 5) {
        let message = document.getElementById('modal-text').innerHTML =
         '<img class="crown" src="/images/crown.png">You are the Champion of all nations and computers!';
        modal.style.display = "block";
    } else if (computerScore === 5) {
        let message = document.getElementById('modal-text').innerHTML = 
        '<img class="crown" src="/images/computer.png"> Bow to the almighty Computer! You lose human! Muahahaha!';
        modal.style.display = "block";
    } else {
        return 0;
    };
}
}


//ROCK BUTTON
let rock = document.querySelector('#rock'); 
rock.addEventListener('click',function() 
{
    playerSelection = 'rock';
    game();
});

//PAPER BUTTON
let paper = document.querySelector('#paper'); 
paper.addEventListener('click',function() 
{
    playerSelection = 'paper';
    game();

});

//SCISSORS BUTTON
let scissors = document.querySelector('#scissors'); 
scissors.addEventListener('click',function() 
{
    playerSelection = 'scissors';
    game();

});


// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Loading Page Modal is hidden
window.onload = function() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal and restart game
span.onclick = function() {
  modal.style.display = "none";
  location.reload();
}

// When the user clicks anywhere outside of the modal, close it and restart game
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    location.reload();
  }
}