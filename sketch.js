
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	paper = new Paper(50,600,30)
    ground = new Ground(300,700,800,30)
  Dustbin = new dustbin(600,600,100,100) 
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  World.add(world, paper); 
  World.add(world,ground);
  World.add(world,Dustbin)
  paper.display()
  ground.display()

}
function keyPressed() {
  if (keyCode === UP_ARROW) {
   Matter.Body.setStatic(paperBody,false)
     Matter.Body.applyForce(paper.Body,paper.Body.position,{x:85,y:85})
     
   }
 }


