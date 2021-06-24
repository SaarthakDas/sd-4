var bg;
var shuttle;
var moon;
var earth;
var bgI;
var shuttleI;
var moonI;
var earthI;
var station;
var stationI;
var asteroid1,asteroid2,asteroid3,asteroid4;
var asteroidG;
var asteroidI;
var edge;
var gameState = "play"
var overI;


function preload(){
   
  bgI = loadImage("images/space.png");
  shuttleI = loadImage("images/shuttle.png");
  stationI = loadImage("images/station.png");
  moonI = loadImage("images/moon.png");
  earthI = loadImage("images/earth.png");
  asteroidI = loadImage("images/Asteroid.png")
  overI = loadImage("images/gameOver.png")
 
}

function setup(){
  createCanvas(displayWidth,displayHeight)
    
  earth = createSprite(1090,380,100,100)
  earth.addImage(earthI)
  earth.scale = 0.9

  moon = createSprite(325,190,70,70)
  moon.addImage(moonI)
  moon.scale = 0.7;

  shuttle = createSprite(1090,280,20,20)
  shuttle.addImage(shuttleI)
  shuttle.scale = 0.9;

  station = createSprite(320,280,50,5)
  station.addImage(stationI)
  station.scale = 0.5; 

  asteroid1 = createSprite(100,100,50,5)
  asteroid1.addImage(asteroidI)
  asteroid1.scale = 0.2; 
  asteroid1.velocityX = Math.round(random(2,5))
  asteroid1.velocityY = Math.round(random(2,5))
   


  asteroid2 = createSprite(100,height-100,50,5)
  asteroid2.addImage(asteroidI)
  asteroid2.scale = 0.2;
  asteroid2.velocityX = Math.round(random(2,5))
  asteroid2.velocityY = Math.round(random(-5,-2))

  asteroid3 = createSprite(width-100,100,50,5)
  asteroid3.addImage(asteroidI)
  asteroid3.scale = 0.2;
  asteroid3.velocityX = Math.round(random(-5,-2))
  asteroid3.velocityY = Math.round(random(2,5))


  
  asteroid4 = createSprite(width-100,height-100,50,5)
  asteroid4.addImage(asteroidI)
  asteroid4.scale = 0.2;
  asteroid4.velocityX = Math.round(random(-5,-2))
  asteroid4.velocityY = Math.round(random(-5,-2))

    asteroidG = new Group(); 
    asteroidG.add(asteroid1);
    asteroidG.add(asteroid2);
    asteroidG.add(asteroid3);
    asteroidG.add(asteroid4);
    edges = createEdgeSprites();
  
   

  
  

}

function draw(){

 background(bgI);
 if(gameState === "play"){
  asteroidG.bounceOff(edges);
  asteroidG.bounceOff(earth);
  asteroidG.bounceOff(moon);
 
  asteroid1.bounceOff(asteroid2);
  asteroid1.bounceOff(asteroid3);
  asteroid1.bounceOff(asteroid4);
 
  asteroid2.bounceOff(asteroid3);
  asteroid2.bounceOff(asteroid4);
 
  asteroid4.bounceOff(asteroid3);
 
  if(keyDown("up")){
 
    shuttle.y -= 5
 
  }
 
  if(keyDown("down")){
 
   shuttle.y += 5
 
 }
 
 if(keyDown("left")){
 
   shuttle.x -= 5
 
 }
 
 if(keyDown("right")){
 
   shuttle.x += 5
 
 }

 if(shuttle.isTouching(asteroidG)){

  gameState = "end"

  }

  if(shuttle.isTouching(station)){
     
    textSize(40)
    text("mission completed",width/2 - 100, height/2 -100)
    asteroidG.destroyEach();
    asteroid.velocityY= 0
    asteroid.velocityX= 0
  }
 
 }

 if(gameState === "end"){
    
  asteroidG.destroyEach();
  shuttle.addImage(overI) 

 }

 
 
    
  drawSprites();
}

