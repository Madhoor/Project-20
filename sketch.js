var tom,jerry;
var bg;
function preload() {
    //load the images he
tomimg = loadAnimation("images/cat1.png");
tomimg1 = loadAnimation("images/cat2.png","images/cat3.png");
tomimg2 = loadAnimation("images/cat4.png");

jerryimg = loadAnimation("images/mouse1.png");
jerryimg1 = loadAnimation("images/mouse2.png","images/mouse3.png")
jerryimg2 = loadAnimation("images/mouse4.png")

bg = loadImage("images/garden.png");
}



function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(750,600);
tom.addAnimation("tom",tomimg);
tom.scale = 0.2;

jerry = createSprite(250,600);
jerry.addAnimation("jerry",jerryimg);
jerry.scale = 0.15;

}

function draw() {

    
    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-80 < jerry.x + 80){
    tom.velocityX =tom.velocityX - tom.velocityX
    tom.addAnimation("ok",tomimg2);
    tom.changeAnimation("ok");

    jerry.addAnimation("ko",jerryimg2);
    jerry.changeAnimation("ko");
}



    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
tom.velocityX = - 2;
jerry.addAnimation("jerry teasing",jerryimg1);
jerry.changeAnimation("jerry teasing");

tom.addAnimation("tom moving",tomimg1);
tom.changeAnimation("tom moving");


}
  //For moving and changing animation write code here


}
