//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var Ground, Polygon;
var Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8, Box9, Box10, Box11, Box12, Box13, Box14, Box15, Box16, Box17, Box18, Box19, Box20, Box21, box22, Box23, Box24, Box25;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  Box1 = new box(330, 235, 30, 40);
  Box2 = new box(360, 235, 30, 40);
  Box3 = new box(390, 235, 30, 40);
  Box4 = new box(420, 235, 30, 40);
  Box5 = new box(450, 235, 30, 40);
  Box6 = new box(360, 195, 30, 40);
  Box7 = new box(390, 195, 30, 40);
  Box8 = new box(420, 195, 30, 40);
  Box9 = new box(390, 155, 30, 40);
}

function draw() {
  background(255,255,255);  
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  Box8.display();
  Box9.display();
  drawSprites();
}