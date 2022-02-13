const selectionList = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

let playerSelection;

let roundCounter = 0;



const gameWinnerDisplay = document.querySelector('.gameWinnerDisplay');

function gameWinnerFunc() {
    if (playerScore > computerScore) {
        gameWinnerDisplay.textContent = "You won the game!";
    } 
    else if (computerScore > playerScore) {
        gameWinnerDisplay.textContent = "You lost the game";
    } 
    else {
        gameWinnerDisplay.textContent = "The game is a tie";
    }
}

gameWinnerDisplay.textContent = "Round 1";



const buttons = document.querySelectorAll('.weaponBtns');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        ++roundCounter;
        playRound();
    });
});    

const allWeaponBtns = document.querySelector('.allWeaponBtns');



const roundWinner = document.querySelector('.roundWinner');
roundWinner.textContent = 'You have 5 rounds. Choose your weapon to start.';



let playerScoreDisplay = document.querySelector('.playerScoreDisplay');
playerScoreDisplay.textContent = playerScore;

let computerScoreDisplay = document.querySelector('.computerScoreDisplay');
computerScoreDisplay.textContent = computerScore;



const resetBtn = document.querySelector('.resetBtn');
resetBtn.style.display = "none";

const resetBtnContainer = document.querySelector('.resetBtnContainer');
resetBtnContainer.style.display = "none";


function playRound() {  
    const computerSelection = selectionList[Math.floor(Math.random() * selectionList.length)];
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScoreDisplay.textContent = ++computerScore;
            computerScoreDisplay.classList.add('scoreUpdate');
            roundWinner.textContent = `Computer chose ${computerSelection}, computer gains a point`;
        } 
        else if (computerSelection === "scissors") {
            playerScoreDisplay.textContent = ++playerScore;
            playerScoreDisplay.classList.add('scoreUpdate');
            roundWinner.textContent = `Computer chose ${computerSelection}, you gain a point!`;
        } 
        else {
            roundWinner.textContent = `Computer chose ${computerSelection}, nobody gains a point`;
        }
    } 
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScoreDisplay.textContent = ++computerScore;
            computerScoreDisplay.classList.add('scoreUpdate');
            roundWinner.textContent = `Computer chose ${computerSelection}, computer gains a point`;            
        } 
        else if (computerSelection === "rock") {
            playerScoreDisplay.textContent = ++playerScore;
            playerScoreDisplay.classList.add('scoreUpdate');
            roundWinner.textContent = `Computer chose ${computerSelection}, you gain a point!`;
        } 
        else {
            roundWinner.textContent = `Computer chose ${computerSelection}, nobody gains a point`;
        }
    } 
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScoreDisplay.textContent = ++computerScore;
            computerScoreDisplay.classList.add('scoreUpdate');
            roundWinner.textContent = `Computer chose ${computerSelection}, computer gains a point`;
        } 
        else if (computerSelection === "paper") {
            playerScoreDisplay.textContent = ++playerScore;
            playerScoreDisplay.classList.add('scoreUpdate');
            roundWinner.textContent = `Computer chose ${computerSelection}, you gain a point!`;
        } 
        else {
            roundWinner.textContent = `Computer chose ${computerSelection}, nobody gains a point`;
        }
    } 

    gameWinnerDisplay.textContent = `Round ${roundCounter + 1}`;


    if (roundCounter >= 5) {
        gameWinnerFunc();
        allWeaponBtns.style.display = "none";
        resetBtn.style.display = "";
        resetBtnContainer.style.display = "";
    }
}

computerScoreDisplay.addEventListener('transitionend', removeTransition);
playerScoreDisplay.addEventListener('transitionend', removeTransition);

function removeTransition(e) {
    this.classList.remove('scoreUpdate');
}

function roundReset() {
    playerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScore = 0;
    computerScoreDisplay.textContent = computerScore;
    roundCounter = 0;
    allWeaponBtns.style.display = "";
    resetBtn.style.display = "none";
    resetBtnContainer.style.display = "none";
    gameWinnerDisplay.textContent = "Round 1";
    roundWinner.textContent = 'You have 5 rounds. Choose your weapon to start.';
}

resetBtn.addEventListener('click', () => {
    roundReset();
})

