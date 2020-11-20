var fixrec,movrec;



function setup() {
  createCanvas(800,400);
  fixrec=createSprite(400, 200, 20, 20);
  fixrec.shapeColor="black";
  movrec=createSprite(300, 200, 20, 20);
  movrec.shapeColor="black";
}

function draw() {
  background(255,255,255);
  movrec.x=World.mouseX;
  movrec.y=World.mouseY;
  console.log(movrec.x-fixrec.x);
  if ( movrec.x - fixrec.x < fixrec.width/2 + movrec.width/2 && 
    fixrec.x - movrec.x < fixrec.width/2 + movrec.width/2 &&
    fixrec.y - movrec.y < fixrec.height/2 + movrec.height/2 &&
    movrec.y - fixrec.y < fixrec.height/2 + movrec.height/2){
    movrec.shapeColor="yellow";
    fixrec.shapeColor="red";
  }
  else{
    movrec.shapeColor="black";
    fixrec.shapeColor="black";

  }
  drawSprites();
}