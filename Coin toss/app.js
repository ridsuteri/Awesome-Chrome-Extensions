//grab selection of head or tail
const buttons = document.querySelectorAll('button');
//set values for heads and tails
let heads = 1;
let tails = 0;
let userScore = 0;
let computerScore = 0;


function displaySelections(user, computer){
    const playerSelection = document.querySelector('#player-selection');
    const computerSelection = document.querySelector('#computer-selection');
    if (user === 'heads'){
        playerSelection.style.color = 'green';
    }
    if (user === 'tails'){
        playerSelection.style.color = 'blue';
    }
    if (computer === 'heads'){
        computerSelection.style.color = 'green';
    }
    if (computer === 'tails'){
        computerSelection.style.color = 'blue';
    }
    playerSelection.innerHTML = `${user}`;
    computerSelection.innerHTML = `${computer}`
}

function displayRandom(random){
    const displayResult = document.querySelector('#image');
    console.log(random);
    
        if (random === 1){
            displayResult.style.backgroundImage =  "url('./heads.png')";
            
        } else {
            displayResult.style.backgroundImage =  "url('./tails.png')";
        }    
}

function tallyScore(random, userPick, computerPick){
    //select scoreboard from DOM
    const playerDisplay = document.querySelector('#player-score');
    const computerDisplay = document.querySelector('#computer-score');
    const winner = document.querySelector('#winner');

    if (userPick === random){
        userScore++;
    }
    if (computerPick === random){
        computerScore++;
    }
    playerDisplay.textContent = `${userScore}`;
    computerDisplay.textContent = `${computerScore}`;
    
    if (userScore === 5 && computerScore === 5){
        winner.innerHTML = `<h1>It's a Tie</h1>`;
    } else if (userScore === 5){
        winner.innerHTML = `<h1>You Win!!!</h1>`;
    } else if (computerScore === 5){
        winner.innerHTML = `<h1>Computer Wins!!!</h1>`;
    }
}

//add an event listener to the buttons
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        //Computer randomly select heads or tails
        const random = Math.round(Math.random());
        //Computer selects a random 'heads' or 'tails
        const computerPick = Math.round(Math.random());
        //Record computers selection
        let computerSelection;
        if (computerPick === 1){
            computerSelection = 'heads';
        } else {
            computerSelection = 'tails';
        }
        
        //spin the coin
        const spin = document.querySelector('#image');
        spin.classList.add('animate');

        //Record users selection
        const userSelection = e.target.id;
        let userPick;

        if (userSelection === 'heads'){
            userPick = 1;
        } else if (userSelection === 'tails'){
            userPick = 0;
        }

        //displays the player and computer's selection 
        //in the Selected portion of DOM
        displaySelections(userSelection, computerSelection);
        displayRandom(random);

       
        
        //Adds the score of the player and computer
        setTimeout(function(){
            tallyScore(random, userPick, computerPick);
            //resets animations
            document.querySelector('#image').classList.remove('animate');
        }, 2000);

    })
})

