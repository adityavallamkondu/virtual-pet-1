//Create variables here
var dog, happyDog, database, foodS, foodStock
var dogImg
function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database;
  dog = createsprite(250,250,50,50);
  dog.addImage(dogImg);
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  //add styles here
  text("Food:"+foodStock)
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}


