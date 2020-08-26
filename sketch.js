
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   paper=new Paper(30,50,5);	
   dustbin=new Dustbin(30,50,20,40);	
   ground=new Ground(30,50,800,10);	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin.display();
  ground.display();

  drawSprites();
 
}
function keyPressed(){
  if (keyCode == UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}

