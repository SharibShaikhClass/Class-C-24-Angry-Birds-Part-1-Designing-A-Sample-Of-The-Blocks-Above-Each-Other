const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,bird1,log1,box3,box4,log2,log3,pig2,box5,log4;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(150,350,70,70);
    box2 = new Box(300,350,70,70);
    ground = new Ground(200,height,400,20)
    pig1 = new Pig(200,350);
    bird1 = new Bird(100,100);
    log1= new Log(220,300,250,PI/2);
    box3 = new Box(150,250,70,70);
    box4 = new Box(300,250,70,70);
    log2 = new Log(220,200,250,PI/2);
    log3 = new Log(150,100,125,PI/7);
    pig2 = new Pig(200,205);
    box5 = new Box(215,100,70,70);
    log4 = new Log(300,100,125,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
}