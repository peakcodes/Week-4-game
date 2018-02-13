$(document).ready(function() {

// Set Global Variables

var wins= 0;
var losses= 0;
// var coneValue,ctwoValue,cthreeValue,cfourValue;
var Random;
var userPoints = 0;
var userScore = 0;


var Random;
var coneValue;
var ctwoValue;
var cthreeValue;
var cfourValue;

// Select random number for start of game. Number ranges from 19-120
function setRandom () {
Random=Math.floor(Math.random()*101+19)
coneValue=Math.floor(Math.random()*11+1)
ctwoValue=Math.floor(Math.random()*11+1)
cthreeValue=Math.floor(Math.random()*11+1)
cfourValue=Math.floor(Math.random()*11+1)

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

function playerWinsorLosses (Random) {
    console.log(userPoints);
    console.log(Random);
    if (userPoints === Random) {
        wins++;
    
        console.log(wins);
    }
    else if (userPoints > Random) {
        losses++;

        resetGame ();
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
        playerWinsorLosses(Random);
        $(".userScore").text(userPoints);
    }
    else if (userClick === "itwo") {
        userPoints += ctwoValue;
        playerWinsorLosses(Random);
        $(".userScore").text(userPoints);
    }

    else if (userClick === "ithree") {
        userPoints += cthreeValue;
        playerWinsorLosses(Random);
        $(".userScore").text(userPoints);
    }
    else if (userClick === "ifour") {
        userPoints += cfourValue;
        playerWinsorLosses(Random);
        $(".userScore").text(userPoints);
    }
    // console.log(userPoints);
    // console.log(playerWinsorLosses);
    });

    $(".userScore").text(userPoints);

// Reset game and determine wins/loses
function resetGame () {
    setRandom ();
    userPoints = 0;
    }
});