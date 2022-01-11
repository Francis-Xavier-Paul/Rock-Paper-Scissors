let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

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
function playRound(playerSelection, computerSelection)
{
    if(playerSelection == "rock")
    {
        if(computerSelection == "rock")
            return "It is a tie. Rock ties with Rock";
        else if(computerSelection == "paper")
        {   
            computerScore++;
            return "You lose. Paper beats Rock";
        }
        else
        {
            playerScore++;
            return "You win. Rock beats Scissors"
        }
    }

    if(playerSelection == "paper")
    {
        if(computerSelection == "rock")
        {
            playerScore++;
            return "You win. Paper beats Rock";
        }
        else if(computerSelection == "paper")
            return "It is a tie. Paper ties with Paper";
        else
        {
            computerScore++;
            return "You loose. Scissors beats paper"
        }
    }

    if(playerSelection == "scissors")
    {
        if(computerSelection == "rock")
        {
            computerScore++;
            return "You loose. Rock beats Scissors";
        }
        else if(computerSelection == "paper")
        {
            playerScore++;
            return "You win. Scissors beats paper";
        }
        else
            return "It is a tie. Scissors ties with Scissors"
    }
}

// Simulates 5 rounds
function game()
{
    for(let i = 0; i < 5; i++)
    {
        playerSelection = prompt("Your choice");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
    }

    // Shows results
    if(playerScore > computerScore)
        alert("You won with " + playerScore + " wins" );
    else if(computerScore > playerScore)
        alert("You lost with " + playerScore + " wins");
    else
        alert("It is a tie");

}

game();
