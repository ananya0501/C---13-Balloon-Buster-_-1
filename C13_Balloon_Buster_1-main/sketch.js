  // creating the variables

  var  background, backgroundImage;
  var bow, bowImage;
  var arrow, arrowImage;
  var red_balloon, red_balloonImage; 
  var pink_balloon, pink_balloonImage;
  var blue_balloon ,blue_balloonImage;
  var green_balloon, green_balloonImage;
  var edges;
  var score = 0;

function preload()
{
  // pre_loading the background, arrow, bow, red balloon, pink balloon, blue balloon & green balloon images

  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
}

function setup() 
{
  // creating the canvas

  createCanvas(400, 400);

  // making the edges as sprites

  edges = createEdgesSprites();
 
  // creating the background

  background = createSprite(0,0,400,400);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating the bow 

  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
}

function draw() 
{
    // making the background move & resetting the background's x position

    background.velocityX = -3 

    if (background.x < 0)
    {
      background.x = background.width/2;
    }
  
    // making the bow move
    
    bow.y = World.mouseY;

    // releasing the arrow
    
    if (keyDown("space")) 
    {
      createArrow();
    }  
  
   // calling red, pink, blue & green balloons
  
   if (World.frameCount % 100 == 0) 
     {
      var select_balloon = Math.round(random(1,4))
      
        if (select_balloon == 1) 
        {
          redBalloon();   
        }
        
        else if (select_balloon == 2) 
        {
          pinkBalloon();   
        }

        else if (select_balloon == 3) 
        {
          blueBalloon();   
        }

        else 
        {
          greenBalloon();   
        }
      } 
  
      
  drawSprites();
  
  // making the text "score" display

  fill("yellow");
  textSize(20);
  textFont("Georgia");
  text("Score: " + score, 270,30);
}

// creating the function arrow

function createArrow()
{
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.scale = 0.25;
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = - 4;
  arrow.lifetime = 100;
}

// creating the function red balloon

function redBalloon()
{
  red_balloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1;
  red_balloon.velocityX = 3;
  red_balloon.lifetime = 140;
}

// creating the function pink balloon

function pinkBalloon() 
{
  pink_balloon = createSprite(0, Math.round(random(15,390)), 10, 10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 1.5;
  pink_balloon.velocityX = 3;
  pink_balloon.lifetime = 140;
}

 // creating the function blue ballooon

function blueBalloon() 
{
  blue_balloon = createSprite(0,Math.round(random(15,390)), 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale = 0.1;
  blue_balloon.velocityX = 3;
  blue_balloon.lifetime = 140;
}

// creating the function green balloon

function greenBalloon() 
{
  green_balloon = createSprite(0,Math.round(random(15,390)), 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
  green_balloon.velocityX = 3;
  green_balloon.lifetime = 140;
}