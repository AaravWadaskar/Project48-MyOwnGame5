var background, backgroundImg;
var start, startImg;
var gameState=0;
var arrow,arrowImg;
var playerCount;
var form;
var database;
var play, playImg;
var game,player;


function preload(){
  backgroundImg=loadImage("Images/giphy (1).gif");
  startImg=loadImage("Images/Start.png");
  arrowImg=loadImage("Images/arrow.png");
  playImg=loadImage("Images/Play.png");
}

function setup() {

  database=firebase.database();
    createCanvas(displayWidth-20,displayHeight-150);
  start=createSprite(135,320, 50, 50);
  start.addImage("start",startImg);
  start.scale=4.1;

  arrow=createSprite(displayWidth-100,displayHeight/2,50,50);
  arrow.addImage("arrow",arrowImg);
  arrow.scale=2;

  play=createSprite(displayWidth/2,displayHeight/2+70,50,50);
  play.addImage("play",playImg);
  play.scale=0.5;
  play.visible=false;

  game= new Game();
  game.getState();
}

function draw() {
  if(gameState===0)
  {
  background(backgroundImg);  
  textSize(80)
  strokeWeight(7);
  stroke("#7EAC9B")
  text("My Game",displayWidth/2.5,displayHeight/6);
  arrow.visible=false;
  if(mousePressedOver(start)){
   game.update(1);
  gameState=1;
  }
  }
  if(gameState===1)
  {
    background(109, 255, 245)
    strokeWeight(3);
    stroke("black")
    textSize(25);
    fill("white");
    text("Rules & Regulations", displayWidth/2-95, displayHeight/6+70);
    start.visible=false;
    arrow.visible=true;
    textSize(120);
    strokeWeight(7);
    //stroke("#7EAC9B")
    stroke("black")
    text("My Game",displayWidth/2.5-100,displayHeight/6+30);

    if(mousePressedOver(arrow)){
      game.update(2);
      
  }
}
  
if(gameState===2){
  background("cyan");
  game.start();
  arrow.visible=false;

  
}
//if(mousePressedOver(play)){
 // game.update(3);
//}
 if(gameState===3)
   { 
    game.play();
    
     }

  drawSprites();
}
