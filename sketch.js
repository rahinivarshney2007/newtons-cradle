
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
  ball1=new Ball(200,400)
  ball2=new Ball(470,400)
  ball3=new Ball(600,400)
  ball4=new Ball(570,400)
  ball5=new Ball(620,400)
  roof1= new Roof(600,100)
  rope1=new Rope(ball1.body,roof1.body,-100)
  rope2=new Rope(ball2.body,roof1.body,-50)
  rope3=new Rope(ball3.body,roof1.body,0)
  rope4=new Rope(ball4.body,roof1.body,50)
  rope5=new Rope(ball5.body,roof1.body,100)
  
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)

  background("white");
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  roof1.see()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
      Matter.Body.applyForce(ball5.body,ball5.body.position,{x:285,y:285})
  }
  if(keyCode===DOWN_ARROW){
      Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-285,y:285})
  }
}



