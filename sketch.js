var Asteroid1, Asteroid2, Asteroid3
var backgroundImg
var SpaceShip





function preload(){
  Asteroid1Img = loadImage("assets/Asteroids.png")
  Asteroid2Img = loadImage("assets/Asteroids 2.png")
  Asteroid3Img = loadImage("assets/Asteroids3.png")
  bgImg = loadImage("assets/Background.png")
  SpaceShipImg = loadImage("assets/SpaceShip.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1

  SpaceShip = createSprite(700, 700)
  SpaceShip.scale = 0.15
  SpaceShip.addImage(SpaceShipImg);
  SpaceShip.debug = true
  SpaceShip.setCollider("circle")

}

function draw() {
  background(255,255,255);

  if(keyDown("RIGHT_ARROW")){
    SpaceShip.x = SpaceShip.x+30
  }
  if(keyDown("LEFT_ARROW")){
   SpaceShip.x = SpaceShip.x-30
  }
  if(keyDown("UP_ARROW")){
    SpaceShip.y = SpaceShip.y-30
  }  
  if(keyDown("DOWN_ARROW")){
    SpaceShip.y = SpaceShip.y+30
  }
  drawSprites();
}

function Asteroids (){
  
}