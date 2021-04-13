var bullet,wall,thikness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
 weight=random(30,52)
 thikness=random(22,83)
 bullet = createSprite(50, 200, 50, 50);
 car.velocityX=speed;
car.debug=true;
 car.shapColor=color(225);

 wall = createSprite(1200, 200, thikness,height/2);
 wall.shapColor=color(80,80,80);
 wall.debug=true;
 
}

function draw() {
  background(0);  
  
 if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5*speed*speed/(thikness*thikness*thikness);
   if(damage>10){
     wall.shapecolour=color(225,0,0);
   }
 }
 if(damage<10){
   wall.shapecolor=color(0,225,0)
 }
  
 hasCollided();
 drawSprites();

}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }return false;
}