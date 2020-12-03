
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
  
 monkey=createSprite(80,315,20,20); 
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;
 
 ground=createSprite(400,350,900,10);
 ground.velocityX=-4;
 ground.x=ground.width/2
  
 FoodGroup = createGroup();
 obstacleGroup=createGroup();

}


function draw() {
  background("lightblue");

  if(ground.x<0){
      ground.x=ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
 drawSprites(); 
  
 textSize(20);
 survivalTime=Math.ceil(frameCount/frameRate())
 text("Survival Time:"+survivalTime,100,50);
  
 spawnBananas(); 
 spawnobstacles();
}
function spawnBananas() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,130,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime =-1;
    
    FoodGroup.add(banana);
  }
}
function spawnobstacles() {
  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,330,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime =-1;
    
    obstacleGroup.add(obstacle);
  }
}




