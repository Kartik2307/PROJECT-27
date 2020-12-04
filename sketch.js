
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

holder=new Ground(390,100,280,20)

ball1=new Bob(300,300,20)
ball2=new Bob(340,300,20)
ball3=new Bob(380,300,20)
ball4=new Bob(420,300,20)
ball5=new Bob(460,300,20)

rope1=new Rope(ball1.body,{x:300,y:100})
rope2=new Rope(ball2.body,{x:340,y:100})
rope3=new Rope(ball3.body,{x:380,y:100})
rope4=new Rope(ball4.body,{x:420,y:100})
rope5=new Rope(ball5.body,{x:460,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  holder.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-100})
  }
}