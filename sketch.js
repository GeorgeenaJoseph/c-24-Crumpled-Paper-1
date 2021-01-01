
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper();
	dustbin=new Dustbin();
	ground=new Ground();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin.display();
  fill("red");
 text(mouseX + " "+ mouseY,mouseX,mouseY);
  drawSprites();
 console.log(paper)
}



function keyPressed()
{
    if(keyDown("UP_ARROW"))
    {
        Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-65})
        
    }
    
}



