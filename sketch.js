var bath,gym,brush,drink,move;
var bathImg,gymImg,brushImg,drinkImg,moveImg;
var background,sleep,eat;
var backgroundImg,sleepImg,eatImg;

function preload(){    
   
backgroundImg = loadAnimation("iss.png");
sleepImg = loadImage("sleep.png");
brushImg = loadImage("brush.png");
gymImg = loadImage("gym1.png","gym2.png","gym11.png","gym12.png");
eatImg = loadImage("eat1.png","eat2.png");
drinkImg = loadImage("drink1.png","drink2.png");
moveImg = loadImage("move.png","move1.png");
bathImg = loadImage("bath1.png","bath2.png");
}

function setup(){
createCanvas(600,600);

// create background here
background = createSprite(600,600);
background.addAnimation(backgroundImg);

// create  boy here
astronaunt = createSprite(300,230);
astronaunt.addImage("sleeping",sleep);
astronaunt.scale=0.1;
}

function draw(){

if(keyDown("UP_ARROW")){
astronaunt.addImage("brushing",brush);
astronaunt.changeImage("brushing");
astronaunt.y = 350;
astronaunt.VelocityX = 0;
astronaunt.VelocityY = 0;
}

if(keyDown("DOWN_ARROW")){
    astronaunt.addImage("gymming",gym);
    astronaunt.changeImage("gymming");
    astronaunt.y = 350;
    astronaunt.VelocityX = 0;
    astronaunt.VelocityY = 0;
    }

    if(keyDown("LEFT_ARROW")){
        astronaunt.addImage("eating",eat);
        astronaunt.changeImage("eating");
        astronaunt.y = 350;
        astronaunt.VelocityX = 0;
        astronaunt.VelocityY = 0;
        }

        if(keyDown("RIGHT_ARROW")){
            astronaunt.addImage("bathing",bath);
            astronaunt.changeImage("bathing");
            astronaunt.y = 350;
            astronaunt.VelocityX = 0;
            astronaunt.VelocityY = 0;
            }      

drawsprite();
}