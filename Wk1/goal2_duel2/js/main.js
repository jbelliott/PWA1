 /* Created by JB Elliott
 Due April 3, 2014
 The Duel - Part I
 */

     //Define Starting Variables, Player One, Array
     var playerOne = ["Spiderman", 100, 30, 15];


     //Define Starting Variables, Player Two, Array
     var playerTwo = ["Batman", 100, 30, 15];

     //Function for winner check

     var winner = "Fight in Progress";

     function winnerCheck() {                                    //checks to see if the duel will continue
         if (playerOne[1] <= 0 && playerTwo[1] <= 0) {     //are both players dead?
             winner = "Both Duelists have died.";
         } else if (playerTwo[1] <= 0) {                       //if not, is player two dead?
             winner = playerOne[0] + " is the winner!";
         } else if (playerOne[1] <= 0) {                        //if not, is player one dead?
             winner = playerTwo[0] + " is the winner!";
         }
         return winner;                                         //send result to variable "winner"
     }

//Function for the Fight

     var round = 0;                                             //set round to begin at 0
     function fight() {

         //This alert starts the fight sequence
         alert(playerOne[0] + ":" + playerOne[1] + " ** Start ** " + playerTwo[0] + ":" + playerTwo[1]);
         console.log(" ** Fight! ** ");
         for (var i = 0; i < 10; i++) {                  //loop to run until duel ends

             //How bad does it hurt this round?
             var playerOneHit = Math.floor(Math.random() * (playerOne[2] - playerOne[3]) + playerOne[3]);
             var playerTwoHit = Math.floor(Math.random() * (playerTwo[2] - playerTwo[3]) + playerTwo[3]);

             //Apply the damage
             playerOne[1] -= playerOneHit;
             playerTwo[1] -= playerTwoHit;
             round++;

             //Show it in the console and alert
             console.log(playerOne[0] + ": " + playerOne[1] + " ** Round " + round + " Over ** " + playerTwo[0] + ": " + playerTwo[1]);
             alert(playerOne[0] + ": " + playerOne[1] + " ** Round " + round + " Over ** " + playerTwo[0] + ": " + playerTwo[1]);

             winnerCheck();                                      //Everyone still standing?
             if (winner != "Fight in Progress") {
                 console.log(winner);

                 break;
             }
         }

         alert(winner);                                          //Someone died...
     }

 //To start it all off
 fight();

