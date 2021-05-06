const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var stand
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
 var ball
 var ground
 var catapult

function setup(){
    createCanvas(600,400);
    myengine=Engine.create();
    myworld=myengine.world;

    stand=new STAND();

    b1=new BOX(300,275);
    b2=new BOX(330,275);
    b3=new BOX(360,275);
    b4=new BOX(390,275);
    b5=new BOX(420,275);
    b6=new BOX(450,275);
    b7=new BOX(480,275);

    b8=new BOX(330,235);
    b9=new BOX(360,235);
    b10=new BOX(390,235);
    b11=new BOX(420,235);
    b12=new BOX(450,235);

    b13=new BOX(360,195);
    b14=new BOX(390,195);
    b15=new BOX(420,195);

    b16=new BOX(390,155);

    
    ball =new BALL(100,200,30);

    ground=new GROUND(300,380,600,20)
    catapult=new CATAPULT(ball.body,{x:100,y:200})

    

}
function draw(){
   background("aqua");
    Engine.update(myengine);

    stand.display();
    fill("pink");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    fill("purple");
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    fill("white")
    b13.display();
    b14.display();
    b15.display();
    fill("lavender")
    b16.display();

    ball.display();

    ground.display();

    catapult.display();
}


function mouseDragged(){
   Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    catapult.fly();
}

