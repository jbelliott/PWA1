 /* Created by JB Elliott
 Due April 17, 2014
 The Duel - Part III
 */

     //Define Starting Variables, Player One, Object Array
     //Object values assigned for name, starting health, then an embedded object containing values for min and max dmg
     //Name of Player One changed from Spiderman to Maskman so the HTML file picture makes more sense
     var playerOne = {"name":"Maskman","health":100, "damage":{"minDmg":15, "maxDmg":30}};


     //Define Starting Variables, Player Two, Array
     //Object values assigned for name, starting health, then an embedded object containing values for min and max dmg
     //Name of Player Two changed from Batman to Beardman so the HTML file picture makes more sense
     var playerTwo = {"name":"Beardman","heath":100,"damage":{"minDmg":30, "maxDmg":15}};

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

         //This alert starts the fight sequence, element 0 refers to player name, 1 refers to player health
         alert(playerOne[0] + ":" + playerOne[1] + " ** Start ** " + playerTwo[0] + ":" + playerTwo[1]);
         console.log(" ** Fight! ** ");
         for (var i = 0; i < 10; i++) {                  //loop to run until duel ends

             //How bad does it hurt this round? Array element 2 refers to max damage, 3 refers to min damage
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

