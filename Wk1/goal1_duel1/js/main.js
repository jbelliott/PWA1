 /* Created by JB Elliott
 Due April 3, 2014
 The Duel - Part I
 */


 //Define Starting Variables, Player One

 var playerOneName = "Spiderman";
 var playerOneHealth = 100;
 var playerOneDamage = 50;

 //Define Starting Variables, Player Two

 var playerTwoName = "Batman";
 var playerTwoHealth - 100;
 var playerTwoDamage = 50;

 //Function for winner check

 var "Fight in Progress";
 function winnerCheck(){                                    //checks to see if the duel will continue
     if (playerOneHealth <= 0 && playerTwoHealth <= 0){     //are both players dead?
    winner = "Both Duelists have died.";
     }else if (playerTwoHealth <= 0){                       //if not, is player two dead?
         winner = playerOneName + " is the winner!";
     }else if (playerOneHealth <=0){                        //if not, is player one dead?
         winner = playerTwoName + " is the winner!";
     }
     return winner;                                         //send result to variable "winner"
 }

//Function for the Fight

 var round = 0;                                             //set round to begin at 0
 function fight() {

    //This alert starts the fight sequence
    alert(playerOneName + ":" + playerOneHealth + " ** Start ** " + playerTwoName + ":" + playerTwoHealth);

    while(winner === "Fight in Progress"){                  //loop to run until winner variable changes


        alert(playerOneName + ": " + playerOneHealth + " ** Round " + round + " Over ** " + playerTwoName + ": " + playerTwoHealth);
        round++;
        winnerCheck();
    }

    alert(winner);
 }
