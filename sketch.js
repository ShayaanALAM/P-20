var c,wl;
var s,w;

function setup() {
  createCanvas(1600,400);


  s=random(55,90);
  w=random(400,1500); 

  c=createSprite(50,200,50,20);
  c.shapeColor=color(255);
  c.velocityX=s;

  wl=createSprite(1500,200,50,height/2);
  wl.shapeColor=color(80,80,80);
}

function draw() {
  background(0); 
  
  if(wl.x-c.x<(c.width+wl.width)/2){
  c.velocityX=0;
  var deformation=0.5*w*s*s/22509;

  if(deformation>180){
    c.shapeColor=color(255,0,0);

  }

  if(deformation<180 && deformation>180){
    c.shapeColor=color(230,230,0);

  }

  if(deformation<180){
    c.shapeColor=color(0,255,0);

  }
  
  }
  drawSprites();
  
}