
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,bin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,450,1000,50);
  ball = new Ball(200,400);
  bin = new Bin(700,420);
  
  Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  ball.display();
  bin.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Body.applyForce(ball.body,ball.body.position,{x:+40,y:-30});
  }

}
