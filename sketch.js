var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;

var player, form, game;
var player1, player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var nunitoRegular, nunitoSemiBold;


function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");

  nunitoRegular = loadFont("assets/Nunito/Nunito-Regular.ttf");
  nunitoSemiBold = loadFont("assets/Nunito/Nunito-SemiBold.ttf");

  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);

  if(playerCount === 2) {
    game.update(1);
  }
  if(gameState === 1) {
    clear(); 
    game.play();

    textSize(32);
    textFont(nunitoSemiBold);
    fill("white");

    text("Player 1: " + player.score, displayWidth/4-610, 50);
    // var tempPlayer = player.index-1;
    // console.log(player.index-1);
    // text("Player 2: " + tempPlayer.score, displayWidth/4-610, 85);
  }
   if(gameState === 2) {
    game.end();

    // textSize(32);
    // textFont(nunitoSemiBold);
    // fill("white");
    // text("Player 1: " + player.score, displayWidth/4-610, 50);
    // text("Player 2: " + players[1].score, displayWidth/4-610, 75);
  }
}