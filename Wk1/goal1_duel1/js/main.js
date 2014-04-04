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

 //Functions for fight and winner check

 function winnerCheck(){                                 //checks to see if the duel will continue
     var winner = "Fight in Progress";
     if (playerOneHealth <= 0 && playerTwoHealth <= 0){  //are both players dead?
    winner = "Both Duelists have died.";
     }else if (playerTwoHealth <= 0){                    //if not, is player two dead?
         winner = playerOneName + " is the winner!";
     }else if (playerOneHealth <=0){                     //if not, is player one dead?
         winner = playerTwoName + " is the winner!";
     }
     return winner;                                     //send result to variable "winner"
 }


 //Loop to contain functions