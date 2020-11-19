
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
const Render =Matter.Render
var bob1,bob2,bob3,bob4,bob5;
var Roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof =new roof(400,100,300,20);
	bob1= new bob(280,400,30);
	rope1 =new rope(bob1.body,Roof.body,-30*3,0);
	bob2= new bob(310,400,30)
	rope2 = new rope(bob2.body,Roof.body,-30*2,0);
	bob3=new bob(340,400,30);
	rope3=new rope(bob3.body,Roof.body,-30,0);
	bob4= new bob(370,400,30)
	rope4 = new rope(bob4.body,Roof.body,0,0);
	bob5=new bob(400,400,30);
	rope5=new rope(bob5.body,Roof.body,30,0);
	Engine.run(engine);
  
}


function draw() {
 
  background("purple");
  
  Roof.display();
  bob1.display();
 rope1.display();
 bob2.display();
  rope2.display()
  bob3.display();
  rope3.display()
	bob4.display();
	rope4.display()
	bob5.display();
	rope5.display()
  
}

/*function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40,y:-45});

	}
}
*/

function mouseDragged(){
	Matter.Body.setPosition (bob5.body,{x:mouseX,y:mouseY})
}


