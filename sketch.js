const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var mouseX,mouseY
var ram
var pcCase
var MotherBoard
var PSU
var GPU
var CPU
var Fans
var backgroundimg
var aio
var ssd
var m2
function preload(){
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(windowWidth, windowHeight);


aio=new aio1 (700,300,100,40)
aio.scale=0.4
GPU=new GPU1 (400,100,100,40)
GPU.scale=0.1
CPU=new CPU1 (80,100,100,40)
CPU.scale=0.1
pcCase=new pcCase1 (400,400,400,200)
pcCase.scale=0.8
motherBoard=new MotherBoard1 (700,700,100,40)
motherBoard.scale=0.9
PSU=new PSU1 (100,400,170,80)
PSU.scale=0.2
fans=new fans1 (400,700,100,40)
fans.scale=0.3
ssd=new ssd1 (150,750,100,40)
ssd.scale=0.07
m2=new m21 (640,100,600,40)
m2.scale=0.1
ram=new ram1 (100,600,100,40)
ram.scale=0.1
   Engine.run(engine);
}

function draw() {
  background("white");
  aio.display();
  GPU.display();
  CPU.display();
  pcCase.display();
  motherBoard.display();
  PSU.display();
  fans.display();
  ssd.display();
  m2.display();
  ram.display();
 drawSprites();
}

function mouseDragged()
{
  Matter.Body.setPosition(aio.body, {x:mouseX, y:mouseY}) 
  Matter.Body.setPosition(GPU.body, {x:mouseX, y:mouseY})
  Matter.Body.setPosition(CPU.body, {x:mouseX, y:mouseY})
  Matter.Body.setPosition(motherBoard.body, {x:mouseX, y:mouseY})
  Matter.Body.setPosition(PSU.body, {x:mouseX, y:mouseY})
  Matter.Body.setPosition(fans.body, {x:mouseX, y:mouseY})
  Matter.Body.setPosition(ssd.body, {x:mouseX, y:mouseY})
  Matter.Body.setPosition(m2.body, {x:mouseX, y:mouseY})
  Matter.Body.setPosition(ram.body, {x:mouseX, y:mouseY})
}
function mouseReleased()
{
	launcherObject.fly();
}