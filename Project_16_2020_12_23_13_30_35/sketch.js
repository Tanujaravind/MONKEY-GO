
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() 
{
    var time=0;
    monkey = createSprite(80,310,20,20);
    monkey.addAnimation("moving",monkey_running)
    monkey.scale=0.1
  
    ground = createSprite(400,350,900,10);
    ground.velocityX=-4;
    ground.x=ground.width/2;
   
     FoodGroup=new Group();
     obstacleGroup=new Group();
  
     score=0;    
  
}


function draw() 
{
 
   background("white");
   if(ground.x<0)
  
}






