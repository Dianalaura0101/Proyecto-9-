
function setup() {
  createCanvas(1430,810);
  background(178, 177, 185);
  box = createSprite(715,405,30,30);
  box.shapeColor= "white";

}

function draw() 
{

  if (keyIsDown(LEFT_ARROW)) 
  {
    background(28, 109, 208);
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background(255, 201, 0);
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background(17, 101, 48);
  }

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background(205, 24, 24);
  }


  drawSprites();
}

