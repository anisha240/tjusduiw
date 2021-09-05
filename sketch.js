const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5, rope, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

    //create bodies here
	bob1 = new Bob(350, 400, 50)
	bob2 = new Bob(400, 400, 50)
	bob3 = new Bob(450, 400, 50)
	bob4 = new Bob(500, 400, 50)
	bob5 = new Bob(550, 400, 50)
	rope = new Rope(bob1.body, {x:350, y:100})
	rope2 = new Rope(bob2.body, {x:400, y:100})
	rope3 = new Rope(bob3.body, {x:450, y:100})
	rope4 = new Rope(bob4.body, {x:500, y:100})
	rope5 = new Rope(bob5.body, {x:550, y:100})
	roof = new Roof(450, 100, 300, 20)


	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
