$(document).ready(function() {

// Set Global Variables

var wins= 0;
var losses= 0;
var coneValue,ctwoValue,cthreeValue,cfourValue;
var Random;
var userPoints

// Select random number for start of game. Number ranges from 19-120
function setRandom () {
var Random=Math.floor(Math.random()*101+19)

$(".randNum").text(Random);
console.log(Random);
// apply to html

// determine Random numbers

var coneValue=Math.floor(Math.random()*11+1)
var ctwoValue=Math.floor(Math.random()*11+1)
var cthreeValue=Math.floor(Math.random()*11+1)
var cfourValue=Math.floor(Math.random()*11+1)

console.log(coneValue, ctwoValue, cthreeValue, cfourValue);

// set user score
var userPoints= 0;

// apply values to html

$("#numW").text(wins);
$("#numL").text(losses);
$("#userScore").text(userPoints); 

}

// check to see if user won
// Tally up wins or loses
// logic for if user scores more - lose
// '' if user ties random numer = Win
// ''game continues until either condition is met

// Determine user score call function

setRandom();


$(".crystalimage").on("click", function () {
   
// Set local var and apply this to above function to pull information
    var userClick = $(this).attr("Value");

    if (userClick == "ione") {
        userPoints + coneValue;
    }
    else if (userClick == "itwo") {
        userPoints + ctwoValue;
    }

    else if (userClick = "ithree") {
        userPoints + cthreeValue;
    }
    else if (userClick = "ifour") {
        userPoints + cthreeValue;
    }
    console.log(userClick);
    })

// Reset game and determine wins/loses

    function playerWinsorLosses () {
    if (userScore === Random) {
        wins++;
    }
    else if (userScore > Random) {
        losses++;
    }
    $("#numW").text(wins);
    $("#numL").text(losses);
    }






// $(."ione").text(cone);
// $(."itwo").text(ctwo);
// $(."ithree").text(cthree);
// $(."ifour").text(cfour);

// determine user score based on clicks of crystals - set up click logic



// <!-- Set up points, game and reset logic with for loop -->

});