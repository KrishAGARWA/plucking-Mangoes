
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var tr;
var m,m1,m2,m3,m4;
var g1
var boy1
var stone;
var chain;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tr=new Tree()
m= new Mango(1000,450)
m1= new Mango(1050,450)
m2= new Mango(1000,400)
m3= new Mango(900,450)
m4= new Mango(1100,450)
g1=new Ground()
boy1=new Boy()
stone= new Stone()
chain= new Slingshot(stone.body,{x:150,y:550})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  tr.display()
  m.display()
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  g1.display()
  boy1.display()
  stone.display()
  chain.display()
  drawSprites();
 
}

function mouseDragged(){
  Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){

 chain. fly()
}