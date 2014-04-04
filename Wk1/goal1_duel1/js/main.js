 /* Created by JB Elliott
 Due April 3, 2014
 The Duel - Part I
 */


 //Define Starting Variables, Player One

 var playerOneName = "Spiderman";
 var playerOneHealth = 100;
 var playerOneMaxDamage = 30;
 var playerOneMinDamage = 15;

 //Define Starting Variables, Player Two

 var playerTwoName = "Batman";
 var playerTwoHealth = 100;
 var playerTwoMaxDamage = 30;
 var playerTwoMinDamage = 15;

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

    for(var i = 0; i < 10; i++){                  //loop to run until duel ends

        //How bad does it hurt this round?
        var playerOneHit = Math.floor(Math.random() * (playerOneMaxDamage - playerOneMinDamage) + playerOneMinDamage);
        var playerTwoHit = Math.floor(Math.random() * (playerTwoMaxDamage - playerTwoMinDamage) + playerTwoMinDamage);

        //Apply the damage
        playerOneHealth -= playerOneHit;
        playerTwoHealth -= playerTwoHit;
        round++;

        //Show it in the console and alert
        console.log(playerOneName + ": " + playerOneHealth + " ** Round " + round + " Over ** " + playerTwoName + ": " playerTwoHealth);
        alert(playerOneName + ": " + playerOneHealth + " ** Round " + round + " Over ** " + playerTwoName + ": " + playerTwoHealth);

        winnerCheck();                                      //Are we done here?
        if (winner != "Fight in Progress"){
            console.log(winner);
            alert(winner);
            break;
        }
    }

    alert(winner);                                          //Someone died.
 }
