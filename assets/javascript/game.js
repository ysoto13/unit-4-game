// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );



var amethyst = 0;
var diamond = 0;
var citrine = 0;
var pearl = 0;
var yourScore =0;
var wins = 0;
var loses = 0;


// random number at start of game between 19-120
var targetNumber = Math.floor(Math.random() * 120) + 19;

$("#targetNumber").text(targetNumber);

$("#scoreTotal").text(yourScore);

$("#winsTotal").text(wins);

$("#losesTotal").text(loses);

amethyst = Math.floor(Math.random() * 12) + 1;
diamond = Math.floor(Math.random() * 12) + 1;
citrine = Math.floor(Math.random() * 12) + 1;
pearl = Math.floor(Math.random() * 12) + 1;


//update gem values on the page
$("#gem1Value")
// player clicks gem & points, between 1-12 value, will be added to their score

$( "#gem1" ).on( "click", function() {
    console.log("click on gem1");
  });

  $( "#gem2" ).on( "click", function() {
    console.log("click on gem2");
  });

  $( "#gem3" ).on( "click", function() {
    console.log("click on gem3");
  });

  $( "#gem4" ).on( "click", function() {
    console.log("click on gem4");
  });



// player wins when their number matches the random number at start

// player loses if their score passes the start number

// game restarts when the player wins or loses

// game restarts with a new random number at the top, gem have new values, & players score will reset

// must show how many games the player has won & lost



});