$(document).ready(function() {

// Set Global Variables

var wins= 0;
var losses= 0;
// var coneValue,ctwoValue,cthreeValue,cfourValue;
var Random;
var userPoints = 0;
var userScore = 0;

var coneValue=Math.floor(Math.random()*11+1)
var ctwoValue=Math.floor(Math.random()*11+1)
var cthreeValue=Math.floor(Math.random()*11+1)
var cfourValue=Math.floor(Math.random()*11+1)

// Select random number for start of game. Number ranges from 19-120
function setRandom () {
var Random=Math.floor(Math.random()*101+19)

$(".randNum").text(Random);
console.log(Random);
// apply to html

// determine Random numbers



console.log(coneValue, ctwoValue, cthreeValue, cfourValue);

// set user score
// var userPoints= 0;

// apply values to html

$("#numW").text(wins);
$("#numL").text(losses);
$("#userScore").text(userPoints); 

}

// check to see if user won
// Tally up wins or loses
// logic for if user scores more - lose
// '' if user ties random number = Win
// ''game continues until either condition is met

// Determine user score call function

setRandom();
$(".userScore").text("hello");

function playerWinsorLosses () {
    if (userPoints === Random) {
        wins++;
    console.log(wins);
    }
    else if (userPoints > Random) {
        losses++;
    console.log(losses);
    }
    $("#numW").text(wins);
    $("#numL").text(losses);
    }
    console.log(userScore);

$(".crystalBtn").click(function () {
// determine user score based on clicks of crystals - set up click logic

    var userClick = this.id;
    // console.log(this.id);

    if (userClick === "ione") {
        // console.log("userClick: ", userClick, " userPoints: ", userPoints, " coneValue: ", coneValue);
        userPoints += coneValue;
        // console.log("ione if");
        playerWinsorLosses();
        $(".userScore").text(userPoints);
    }
    else if (userClick === "itwo") {
        userPoints += ctwoValue;
        playerWinsorLosses();
        $(".userScore").text(userPoints);
    }

    else if (userClick === "ithree") {
        userPoints += cthreeValue;
        playerWinsorLosses();
        $(".userScore").text(userPoints);
    }
    else if (userClick === "ifour") {
        userPoints += cfourValue;
        playerWinsorLosses();
        $(".userScore").text(userPoints);
    }
    // console.log(userPoints);
    // console.log(playerWinsorLosses);
    });

    $(".userScore").text(userPoints);

// Reset game and determine wins/loses
});