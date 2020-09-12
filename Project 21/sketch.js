var bullet, wall;
var speed, weight;
var thickness, damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 40, 30);
  bullet.shapeColor = "white";

  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);
  
  speed = random(223, 321);
  weight = random(30, 52);

  bullet.velocityX = speed;

  
  
}
function draw() {
  background(0, 0, 0);

  bullet.collide(wall);
  
  if(hasCollided(bullet, wall)){

    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    
    if(damage < 10){
      wall.shapeColor = "green";
    }
    else if(damage > 10){
      wall.shapeColor = "red";
    }
  }
  

  drawSprites();
}

function hasCollided(lbullet, lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  else {
    return false;
  }
}