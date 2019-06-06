// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );


var amethyst = 0;
var diamond = 0;
var citrine = 0;
var pearl = 0;
var yourScore = 0;
var wins = 0;
var loses = 0;


// random number at start of game between 19-120
var targetNumber = Math.floor(Math.random() * 101 + 19);

// displays the target number we need to add up to, to win the game
$("#targetNumber").text(targetNumber);

// displays my score
$("#scoreTotal").text(yourScore);

// displays my wins
$("#winsTotal").text(wins);

// displays my loses
$("#losesTotal").text(loses);


// this is what will give my gems a number between 1-12
amethyst = Math.floor(Math.random() * 11 + 1);
diamond = Math.floor(Math.random() * 11 + 1);
citrine = Math.floor(Math.random() * 11 + 1);
pearl = Math.floor(Math.random() * 11 + 1);



// player clicks gem & points, between 1-12 value, will be added to their score
$("#gem1").on("click", function() {
    console.log(amethyst + yourScore);
    yourScore = yourScore + amethyst;
    $("#scoreTotal").text(yourScore);
    if (yourScore == targetNumber){
      winner();
    } else if (yourScore > targetNumber){
      loser();
    }
  });

  $("#gem2").on("click", function() {
    console.log(diamond + yourScore);
    yourScore = yourScore + diamond;
    $("#scoreTotal").text(yourScore);
    if (yourScore == targetNumber){
      winner();
    } else if (yourScore > targetNumber){
      loser();
    }
  });



  $("#gem3").on("click", function() {
    console.log(citrine + yourScore);
    yourScore = yourScore + citrine;
    $("#scoreTotal").text(yourScore);
    if (yourScore == targetNumber){
      winner();
    } else if (yourScore > targetNumber){
      loser();
    }
  });

  $("#gem4").on("click", function(){
    yourScore = yourScore + pearl;
    $("#scoreTotal").text(yourScore);
    if (yourScore == targetNumber){
      winner();
    } else if (yourScore > targetNumber){
      loser();
    }
  });

function winner(){
  wins++;
  $("#winsTotal").text(wins);
  reset();
};

function loser(){
  loses++;
  $("#losesTotal").text(loses);
  reset();
};

 function reset(){
  $("#targetNumber").text(targetNumber);
  targetNumber = Math.floor(Math.random() * 101 + 19);
  amethyst = Math.floor(Math.random() * 11 + 1);
  diamond = Math.floor(Math.random() * 11 + 1);
  citrine = Math.floor(Math.random() * 11 + 1);
  pearl = Math.floor(Math.random() * 11 + 1);
  yourScore = 0;
  $("#scoreTotal").text(yourScore);
};



// player wins when their number matches the random number at start

// player loses if their score passes the start number

// game restarts when the player wins or loses

// players score will reset

// must show how many games the player has won & lost



});