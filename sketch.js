
var fixed,moving;

function setup() {
  createCanvas(800,400);
 
  fixed =createSprite(400,200,50,80);
  moving = createSprite(100,200,80,50);

  fixed.shapeColor = "blue";
  moving.shapeColor = "red";

  moving.velocityX=3;
  fixed.velocityX=-3;
  
}

function draw() {
  background(255,255,255);  

 // moving.x = World.mouseX;
 // moving.y = World.mouseY;


  console.log(fixed.x-moving.x)


// algorithm for collision detection

/*
  if(fixed.x-moving.x <= moving.width/2+fixed.width/2 &&
    moving.x-fixed.x <= moving.width/2+fixed.width/2 &&
     fixed.y-moving.y <= moving.height/2+ fixed.height/2 && 
     moving.y - fixed.y <= moving.height/2+ fixed.height/2 ){
    fixed.shapeColor = "black";
  moving.shapeColor = "black";
  }
  else{
    fixed.shapeColor = "blue";
  moving.shapeColor = "red";
  }
*/


//algorithm for bounceOff

if(fixed.x-moving.x <= moving.width/2+fixed.width/2 &&
  moving.x-fixed.x <= moving.width/2+fixed.width/2 ){
  
fixed.velocityX = - fixed.velocityX; 
moving.velocityX = - moving.velocityX;
}
if( fixed.y-moving.y <= moving.height/2+ fixed.height/2 && 
  moving.y - fixed.y <= moving.height/2+ fixed.height/2)
{
  fixed.velocityY = - fixed.velocityY; 
moving.velocityY = - moving.velocityY
}



  drawSprites();
}
