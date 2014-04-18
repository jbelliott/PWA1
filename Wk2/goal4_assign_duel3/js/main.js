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
     var playerTwo = {"name":"Beardman","health":100,"damage":{"minDmg":30, "maxDmg":15}};

     //Function for winner check

     var winner = "Fight in Progress";

     function winnerCheck() {                                    //checks to see if the duel will continue
         if (playerOne.health <= 0 && playerTwo.health <= 0) {     //are both players dead?
             winner = "Both Duelists have died.";
         } else if (playerTwo.health <= 0) {                       //if not, is player two dead?
             winner = playerOne.name + " is the winner!";
         } else if (playerOne.health <= 0) {                        //if not, is player one dead?
             winner = playerTwo.name + " is the winner!";
         }
         return winner;                                         //send result to variable "winner"
     }

//Function for the Fight

     var round = 0;                                             //set round to begin at 0
     function fight() {

         //This alert starts the fight sequence.
         alert(playerOne.name + ":" + playerOne.health + " ** Start ** " + playerTwo.name + ":" + playerTwo.health);
         console.log(" ** Fight! ** ");
         for (var i = 0; i < 10; i++) {                  //loop to run until duel ends

             //How bad does it hurt this round? Array element 2 refers to max damage, 3 refers to min damage
             var playerOneHit = Math.floor(Math.random() * (playerOne.damage.maxDmg - playerOne.damage.minDmg) + playerOne.damage.minDmg);
             var playerTwoHit = Math.floor(Math.random() * (playerTwo.damage.maxDmg - playerTwo.damage.minDmg) + playerTwo.damage.minDmg);

             //Apply the damage
             playerOne.health -= playerOneHit;
             playerTwo.health -= playerTwoHit;
             round++;

             //Show it in the console and alert
             console.log(playerOne.name + ": " + playerOne.health + " ** Round " + round + " Over ** " + playerTwo.name + ": " + playerTwo.health);
             alert(playerOne.name + ": " + playerOne.health + " ** Round " + round + " Over ** " + playerTwo.name + ": " + playerTwo.health);

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

