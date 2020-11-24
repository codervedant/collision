var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
 
  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect = createSprite(550, 200,50,80);
  fixedRect.shapeColor  = "green";
  fixedRect.debug = true;
}

function draw() {

  background(255,255,255); 

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(fixedRect.x - movingRect.x < movingRect.width/2+ fixedRect.width/2 && movingRect.x - fixedRect.x < movingRect.width/2+ fixedRect.width/2 
   && fixedRect.y - movingRect.y < movingRect.height/2+ fixedRect.height/2 && movingRect.y - fixedRect.y < movingRect.height/2+ fixedRect.height/2  ) {

    movingRect.shapeColor = "red";
    fixedRect.shapeColor  = "red";

  }

  else

  {
    fixedRect.shapeColor  = "green";
    movingRect.shapeColor  = "green";
  }
   
  drawSprites();
}