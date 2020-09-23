const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground (width/2,400,width,10);

	paper= new Paper(100,300,70);

	dustbin=new Dustbin(700,365,100,10);

	//dustbin2=new Dustbin(650,345,10,100);

	//dustbin3=new Dustbin(750,345,10,100);

	Engine.run(engine);
  
}

function draw() {
  background("white");
  
  drawSprites();

  ground.display();

  paper.display();

  dustbin.display();

  //dustbin2.display();

  //dustbin3.display();


}
function keyPressed()
{
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:16,y:-16});
	}
}