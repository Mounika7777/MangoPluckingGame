const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var tree, stone,ground, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImg;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,550);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	tree = new Tree(900,350,100,400);
	
	ground = new Ground(width/2,600,width,20);
	mango1 = new Mango(660,250,15);
	mango2 = new Mango(1050,200,15);
	mango3 = new Mango(800,100,15);
	mango4 = new Mango(820,250,15);
	mango5 = new Mango(900,130,15);
	mango6=new Mango(850,230,15);
	mango7=new Mango(1090,290,15);
	mango8=new Mango(900,150,20);
	mango9=new Mango(900,230,15);
	mango10=new Mango(1000,200,20);
	mango11=new Mango(1020,300,20);
	mango12=new Mango(960,160,15);
	stone = new Stone(150,550,15);
	boyShot = new Shot(stone.body,{x:150,y:500});
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
		
		//Engine.run(engine);
	  //Render.run(render);
	  Engine.run(engine);
  
}


function draw() {
  
  
  //Engine.update(engine);
  background("lightgray");
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);

 
	tree.display();
	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	stone.display();
	boyShot.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    boyShot.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		boyShot.attach(stone.body);
	}
}
