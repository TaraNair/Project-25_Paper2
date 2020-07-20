const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground, paper, dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 300, 70);
	dustbin = new Dustbin(600, 595, 100, 20);
	ground = new Ground(width/2, height - 20, width, 40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paper.body, paper.body.position, {x:50, y:-200})
	}
}

