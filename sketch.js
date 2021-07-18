//Create variables here
var dog,dogimg,dogimg1;
var database
var foods,foodstock;

function preload()
{
	//load images here
 dogimg=loadImage("images/dogimg.png")
 dogimg1=loadImage("images/dogimg1.png")
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,300, 50,50);
  dog.addImage(dogimg);
  dog.scale=0.2;
  foodstock=database.ref("Food");
  foodstock.on("value",readstock);
}


function draw() {  
   background("Black");
  
  //add styles here
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogimg1);
    
  }
  textSize(25);
  fill("red");
  text("Food Remaining : "+foods,230,50);
  
  drawSprites();
}

function readstock(data){
 foods=data.val()
}
 function writeStock(x){

if(x<= 0){
  x=0
}
else {
  x=x-1
}

  database.ref('/').update({
    Food:x
  })
 }

