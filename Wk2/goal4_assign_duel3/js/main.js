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

     //Function for winner check, returns a value for winner used for posting results to document

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

//Function for the Fight called by the event button on the HTML document

     var round = 0;
     function fight() {

         //This console log shows at the start of the fight sequence

         console.log(" ** Fight! ** ");


             //This generates the damage dealt to each of the players on a round-by-round basis, each time the event
             //is initialized by clicking the button on the document

             var playerOneHit = Math.floor(Math.random() * (playerOne.damage.maxDmg - playerOne.damage.minDmg) + playerOne.damage.minDmg);
             var playerTwoHit = Math.floor(Math.random() * (playerTwo.damage.maxDmg - playerTwo.damage.minDmg) + playerTwo.damage.minDmg);

             //Apply the damage to the remaining player health and increment the round number by 1

             playerOne.health -= playerOneHit;
             playerTwo.health -= playerTwoHit;
             round++;

            //DOMs to rewrite the HTML page with the new values for Round and player health remaining
            document.getElementById("round").innerHTML = "Round " + round + " Complete!";
            document.getElementById("kabal").innerHTML = playerOne.name + " : " + playerOne.health;
            document.getElementById("kratos").innerHTML = playerTwo.name + " : " + playerTwo.health;

             //Show the results in the console

             console.log(playerOne.name + ": " + playerOne.health + " ** Round " + round + " Over ** " + playerTwo.name + ": " + playerTwo.health);

            //Function to check if there is a winner. When someone drops below 0 or 10 rounds passes, the event button
            //becomes disabled and a "Game Over" message displays instead

             winnerCheck();
         if (round < 10){

             if (winner != "Fight in Progress") {
                 console.log(winner);
                 document.getElementById("scores").innerHTML = winner;
                 document.getElementById("fight_btn").innerHTML = "Game Over!";


             }}else{
                 document.getElementById("scores").innerHTML = "This Battle Ends in a Draw";
                 document.getElementById("round").innerHTML = "Max Rounds Reached (10)";
         }





     }

