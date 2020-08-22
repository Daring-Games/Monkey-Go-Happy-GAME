var moving_rectangle, fixed_rectangle;
function setup() {
  createCanvas(800,400);
  moving_rectangle = createSprite(200,200,40,10);
  moving_rectangle.shapeColor = "yellow";
  fixed_rectangle= createSprite(100,200,10,40);
  fixed_rectangle.shapeColor = "orange";
}

function draw() {
  background(0,0,0);  
  moving_rectangle.x = mouseX;
  moving_rectangle.y = mouseY;

  if(moving_rectangle.x - fixed_rectangle.x <=moving_rectangle.width/2 + fixed_rectangle.width/2 
    && fixed_rectangle.x - moving_rectangle.x <=fixed_rectangle.width/2 + moving_rectangle.width/2 &&
    moving_rectangle.y - fixed_rectangle.y <=moving_rectangle.height/2 + fixed_rectangle.height/2
    && fixed_rectangle.y - moving_rectangle.x <=fixed_rectangle.height/2 + moving_rectangle.height/2) {
      moving_rectangle.shapeColor = "red";
      fixed_rectangle.shapeColor = "red";
    } else {
      moving_rectangle.shapeColor = "yellow";
      fixed_rectangle.shapeColor = "orange";
    }

  drawSprites();
}