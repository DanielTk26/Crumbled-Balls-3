const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var paper, launcher,dustbin;

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    paper=new Paper(200,200,70);
	ground=new Ground(width/2,390,width,20);
    dustbin=new Dustbin(1000,270);
    launcher = new Launcher(paper.body,{x:200,y:100});

   
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
    paper.display();
    launcher.display(); 
    ground.display(); 
    dustbin.display();  
}

function mouseDragged() {
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    launcher.fly();
}
