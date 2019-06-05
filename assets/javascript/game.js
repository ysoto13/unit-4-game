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

// displays the target number we need to add up to, to win the game
$("#targetNumber").text(targetNumber);

// displays my score
$("#scoreTotal").text(yourScore);

// displays my wins
$("#winsTotal").text(wins);

// displays my loses
$("#losesTotal").text(loses);


// this is what will give my gems a number between 1-12
amethyst = Math.floor(Math.random() * 12) + 1;
diamond = Math.floor(Math.random() * 12) + 1;
citrine = Math.floor(Math.random() * 12) + 1;
pearl = Math.floor(Math.random() * 12) + 1;


// player clicks gem & points, between 1-12 value, will be added to their score
$( "#gem1" ).on( "click", function() {
    console.log(amethyst + yourScore);
  });

  $( "#gem2" ).on( "click", function() {
    console.log(diamond + yourScore);
  });

  $( "#gem3" ).on( "click", function() {
    console.log(citrine + yourScore);
  });

  $( "#gem4" ).on( "click", function() {
    console.log(pearl + yourScore);
  });



// player wins when their number matches the random number at start

// player loses if their score passes the start number

// game restarts when the player wins or loses

// game restarts with a new random number at the top, gem have new values, & players score will reset

// must show how many games the player has won & lost



});