 
let playGame = confirm("Shall we play rock,paper,scissors?");//initial prompt
 
if(playGame){
    //play
    score = 0;
    let playerChoice = prompt("Please enter rock, paper or scissors.");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            //computer generation
            let computerChoice = ["rock","paper","scissors"];
            let turn =  Math.floor(Math.random()*4);
            computerTurn = computerChoice[turn];
            console.log("Computer choice: " + computerTurn);
            // user evaluation
            if(playerOne === computerTurn){
                alert(`It's Tie Computer Won \n You:${playerOne} \n computer:${computerTurn}`);
                
            } else if ( (playerOne === "rock" && computerTurn === "scissors") || (playerOne === "paper" && computerTurn === "rock") || (playerOne === "scissors" &&computerTurn === "paper") ) {
                alert(`You won!\n You:${playerOne} \n computer:${computerTurn}`);
            } 
                    
            }else {
                alert("Please enter either rock,paper or scissors.."); // if user types something else this pops up.
        
            }
        } 
        let playagain = confirm("Play again?");
        playagain?location.reload():alert("Ok,Thangs for playing");
         
         
    } else {
        alert("Ok,May be next time [^_^]") // if the user cancels the first prompt this pop ups
    }  
/*

*/
