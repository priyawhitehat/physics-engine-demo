const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var ground;

function setup()
{
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
 
  var groundoption={isStatic:true};

  ground=Bodies.rectangle(200,400,800,20,groundoption);
  World.add(world,ground);


}

function draw()
{
  background(0);
  Engine.update(engine);
  fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  
}
