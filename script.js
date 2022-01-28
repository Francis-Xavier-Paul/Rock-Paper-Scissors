let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";
let round = 1;

let rounds = document.querySelector("#round h1");
const result = document.querySelector('.result');
let rtext = document.createElement('p');

// Generates random computer selection
function computerPlay(){
    let compSelection = Math.floor(Math.random() * 3);
    if(compSelection == 0)
        compSelection = "rock";
    else if(compSelection == 1)
        compSelection = "paper";
    else
        compSelection = "scissors";
    return compSelection;
}

// Plays one round 
function playRound(playerSelection)
{
    rounds.textContent = `Round ${round}`;
    round++;
    console.log(playerScore);
    computerSelection = computerPlay();
    if(playerSelection == "rock")
    {
        if(computerSelection == "rock"){
            rtext.textContent = "It is a tie. Rock ties with Rock";
            result.appendChild(rtext);
            return "It is a tie. Rock ties with Rock";
        }
            
        else if(computerSelection == "paper")
        {   
            computerScore++;
            rtext.textContent = "You lose. Paper beats Rock";
            result.appendChild(rtext);
            return "You lose. Paper beats Rock";
        }
        else
        {
            playerScore++;
            rtext.textContent = "You won. Rock beats Scissors";
            result.appendChild(rtext);
            return "You won. Rock beats Scissors"
        }
    }

    if(playerSelection == "paper")
    {
        if(computerSelection == "rock")
        {
            playerScore++;
            rtext.textContent = "You won. Paper beats Rock";
            result.appendChild(rtext);
            return "You won. Paper beats Rock";
        }
        else if(computerSelection == "paper"){
            rtext.textContent = "It is a tie. Paper ties with Paper";
            result.appendChild(rtext);
            return "It is a tie. Paper ties with Paper";
        }
        else
        {
            computerScore++;
            rtext.textContent = "You loose. Scissors beats paper";
            result.appendChild(rtext);
            return "You loose. Scissors beats paper"
        }
    }

    if(playerSelection == "scissors")
    {
        if(computerSelection == "rock")
        {
            computerScore++;
            rtext.textContent = "You loose. Rock beats Scissors";
            result.appendChild(rtext);
            return "You loose. Rock beats Scissors";
        }
        else if(computerSelection == "paper")
        {
            playerScore++;
            rtext.textContent = "You won. Scissors beats paper";
            result.appendChild(rtext);
            return "You won. Scissors beats paper";
        }
        else{
            rtext.textContent = "It is a tie. Scissors ties with Scissors";
            result.appendChild(rtext);
            return "It is a tie. Scissors ties with Scissors"
        }
    }
}

// Simulates 5 rounds
function game(playerSelection)
{
    playRound(playerSelection);

    // Shows results
    if(playerScore == 5){
        rtext.style.cssText = "font-size:2em"
        rtext.textContent = "You won 5 rounds";
        result.appendChild(rtext);
        playerScore = 0;
        computerScore = 0;
        round = 1;
    }
    
    else if(computerScore == 5){
        rtext.style.cssText = "font-size:2em"
        rtext.textContent = "You lost. Game Over.";
        result.appendChild(rtext);
        playerScore = 0;
        computerScore = 0;
        round = 1;
    }

    else{
        rtext.style.cssText = "font-size:1.3em"
    }

}


// selects rps icons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Adds eventlistners to icons

rock.addEventListener('click', () => game("rock"));
paper.addEventListener('click', () => game("paper"));
scissors.addEventListener('click', () => game("scissors"));




