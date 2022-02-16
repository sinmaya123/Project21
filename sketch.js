var path,girl,monster,book,monster2;
var pathImg,girlImg,bookImg,monsterImg,gameOversound,Restart;
var treasureCollection = 0;
var bookG,monsterGroup,monster2Group;
var gameOverImg,gameOver2Img,restartImg,mrzombieImg,monster2Img;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("sea.png");
  girlImg = loadImage("thegirl.png");
  
  bookImg = loadImage("books-png.webp");
  monsterImg = loadImage("mrmonster.png");
  gameOverImg = loadImage("gameOver.png");
  monster2Img = loadImage("mrzombie.jpeg");
  gameOver2Img = loadImage("gameover2.png");
 

  gameOversound = loadSound("Super Mario Bros 3.mp3");




 
  
  
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(height/2,height,width,2);
path.addImage(pathImg);
path.velocityY = 15;
path.scale = 3;



//creating boy running
girl = createSprite(70,580,20,20);
girl.addImage(girlImg);
girl.scale=0.1;
  
 

bookG=new Group();
monster2Group = new Group();
monsterGroup=new Group();


textSize(20);
  fill(255);
  text("Books collected : "+ treasureCollection,10,30);
}

function draw() {

  if(gameState===PLAY){
  background(0);
  girl.x = World.mouseX;
  
  edges= createEdgeSprites();
  girl.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/3;
  }
  if (gameState === END){
    gameOversound.play();
   
  }
  
  
   
    createBook();
    createMonster2();
    createMonster();
    

    
     if (bookG.isTouching(girl)) {
      bookG.destroyEach();
      treasureCollection=treasureCollection+50;
      
    }else if 
      (monsterGroup.isTouching(girl)) {
        
        gameState=END;
        
        bookG.destroyEach();
        
        
      
        monsterGroup.destroyEach();
        monster2Group.destroyEach();

        
       
       
       bookG.setVelocityYEach(0);
       monster2Group.setVelocityYEach(0);
       monsterGroup.setVelocityYEach(0);
       gameOver1 = createSprite(height/2,height/2);
       gameOver1.addImage(gameOverImg);
       
       }
       else
       if (monster2Group.isTouching(girl)){
         gameOversound.play();
         gameState = END;
         bookG.destroyEach();
         monsterGroup.destroyEach();
         monster2Group.destroyEach();
         bookG.setVelocityYEach(0);
         monsterGroup.setVelocityYEach(0);
         monster2Group.setVelocityYEach(0);
         gameOver2 = createSprite(height/2,height/2);
        gameOver2.addImage(gameOver2Img);       }
       
  
          
         
         
       }
       if (gameState === END && treasureCollection === 50){
        gameOversound.play();
      }
       if (gameState === END && treasureCollection === 100){
        gameOversound.play();
      }
      if (gameState === END && treasureCollection === 150){
        gameOversound.play();
      }
       if (gameState === END && treasureCollection === 200){
         gameOversound.play();
       }
       else if(gameState === END && treasureCollection === 250){
         gameOversound.play();
       }
       else if(gameState === END && treasureCollection === 300){
         gameOversound.play();
       }
       else if(gameState === END && treasureCollection === 350){
        gameOversound.play();
      }
      else if(gameState === END && treasureCollection === 400){
        gameOversound.play();
      }
      else if(gameState === END && treasureCollection === 450){
        gameOversound.play();
      }
      else if(gameState === END && treasureCollection === 500){
        gameOversound.play();
      }
      else if(gameState === END && treasureCollection === 550){
        gameOversound.play();
      }
      else if(gameState === END && treasureCollection === 600){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 650){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 700){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 750){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 800){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 850){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 900){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 950){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1000){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1050){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1100){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1150){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1200){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1250){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1300){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1350){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1400){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1450){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1500){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1550){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1600){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1650){
        gameOversound.play();
      } else if(gameState === END && treasureCollection === 1700){
        gameOversound.play();
      }

      drawSprites(); 
      
       
    
   }
  

      
     
      
    
        
       
        
        
        
        

  
  
  
  
  
  





function createBook() {
  if (World.frameCount % 20 == 0) {
  var book = createSprite(Math.round(random(50, 1200),40, 10, 10));
  book.addImage(bookImg);
  book.scale=0.13;
  book.velocityY = 20;
  book.lifetime = 150;
  bookG.add(book);
}
}



function createMonster(){
  if (World.frameCount % 50 == 0) {
  var monster = createSprite(Math.round(random(50,1200),40, 10, 10));
  monster.addImage(monsterImg);
  monster.scale=0.1;
  monster.velocityY = 150;
  monster.lifetime = 150;
  monsterGroup.add(monster);
  }
}


function createMonster2(){
  if (World.frameCount % 50 == 0) {
  var monster2 = createSprite(Math.round(random(50,1200),40, 10, 10));
  monster2.addImage(monsterImg);
  monster2.scale=0.1;
  monster2.velocityY = 150;
  monster2.lifetime = 150;
  monster2Group.add(monster2);
  }
}



  
  

