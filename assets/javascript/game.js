$(document).ready(function () {
    // global variables

    var wins = 0;
    var losses = 0;
    var userScore = 0;
    var minScore = 50;
    var maxScore = 100;
    var character = {
        aramaki:
        {name: "aramaki",
        value: 0
        },
        batou:
        {name: "batou",
        value: 0
        },
        ishikawa:
        {name: "ishikawa",
        value: 0
        },
        togusa:
        {name: "togusa",
        value: 0
    }}

  
    var score = scoreFromRange (minScore, maxScore);
    
   
    // =========================================================================
    // Functions (reusable blocks of code)
function scoreFromRange(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function addScore(clickedButton){
    userScore += clickedButton.ranbutnum;
    $("#user-score").html(userScore);

        if (userScore == score){
            wins++;
            $("#winCount").html(wins);
            startGame();
        }

        else if (userScore > score){
            losses++;
            $("#loss-count").html(losses);
            startGame();
        }
}

function startGame(){
    character.aramaki.ranbutnum = Math.floor(Math.random() *12) + 1;
    character.togusa.ranbutnum = Math.floor(Math.random() *12) + 1;
    character.ishikawa.ranbutnum = Math.floor(Math.random() *12) + 1;
    character.batou.ranbutnum = Math.floor(Math.random() *12) + 1;
    userScore= 0;
    score = scoreFromRange(minScore, maxScore);
        $("#target-score").text(score);
        $("#user-score").text(userScore);
    console.log("aramaki:" + character.aramaki.score);
    console.log("togusa:" + character.togusa.score);
    console.log("batua:" + character.batou.score);
    console.log("ishikawa:" + character.ishikawa.score);
    console.log("userScore: " + userScore);
    console.log("score: " + score);
    
}

startGame();


	$("#button-1").click(function(){
		addScore(character.aramaki)
        console.log("userscore: " + userScore);
	});
	$("#button-2").click(function(){
		addScore(character.batou)
        console.log("userscore: " + userScore);
	});
	$("#button-3").click(function(){
		addScore(character.ishikawa)
        console.log("userscore: " + userScore);
	});
	$("#button-4").click(function(){
		addScore(character.togusa)
        console.log("userscore: " + userScore);
	});
})



    // ==========================================================================

//     // Main Proces
//     $("#target-score").text(score);

//     $("#button-1").on("click", function () {
//         if (score > userScore) {
//         if (value = 'buttonOne') {
//             userScore = userScore + buttonOne;
//             $("#user-score").text(userScore);
//             console.log("userScore: " + userScore);
//     }}});
//     $("#button-2").on("click", function () {
//         if (score > userScore) {
//         if (value = 'buttonTwo') {
//             userScore = userScore + buttonTwo;
//             $("#user-score").text(userScore);
//             console.log("userScore: " + userScore);

//     }}});
//     $("#button-3").on("click", function () {
//         if (score > userScore) {
//         if (value = 'buttonThree') {
//             userScore = userScore + buttonThree;
//             $("#user-score").text(userScore);

//     }}});
//     $("#button-4").on("click", function () {
//         if (score > userScore) {
//         if (value = 'buttonFour') {
//             userScore = userScore + buttonFour;
//             $("#user-score").text(userScore);
    
//      }}});
// });
  


       
   
   

//     // ==========================================================================


