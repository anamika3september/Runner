var path, pathimage; 
var boy, boyrunner
var wall, wall2

function preload(){
  pathimage = loadImage("path.png");
  boyrunner = loadAnimation("Runner-1.png","Runner-2.png") 
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathimage);
  path.scale = 1.2;

  boy = createSprite(200,300)
  boy.addAnimation("runner",boyrunner)
  boy.scale = 0.1

  wall = createSprite(385,200,3,500)
  wall2 = createSprite(30,200,3,500)
  wall.visible = false
  wall2.visible = false

}

function draw() {
  background(0);

  boy.x = World.mouseX


  path.velocityY = 15; 

  if (path.y > 400) {
   path.y = 100 
  }

  boy.collide(wall);
  boy.collide(wall2);

  drawSprites() 
}