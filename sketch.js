const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;

var umbrella;

var maxDrops = 100; 
var drops = [];

var thunder,rand;
var thunderImage1,thunderImage2,thunderImage3,thunderImage4;
var thunderFrameCount;

function preload(){
    thunderImage1 = loadImage("images/thunderbolt/1.png");
    thunderImage2 = loadImage("images/thunderbolt/2.png");
    thunderImage3 = loadImage("images/thunderbolt/3.png");
    thunderImage4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(600,750);  
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(300,500);

    for(var i = 0;i<=maxDrops;i++){
        drops.push(new Drop(random(100,500),random(0,100)))
    }

    //Engine.run(engine);
}

function draw(){
    background("black");
    Engine.update(engine);

    umbrella.display();

    for(var j = 0;j<drops.length;j++){
        drops[j].display();
        drops[j].update();
    }

    if(frameCount%100 === 0){
        rand = Math.round(random(1,4));
        thunderFrameCount = frameCount;
        thunder = createSprite(random(50,550),random(0,50),10,10);
        switch(rand){
            case 1:thunder.addImage(thunderImage1);
            break;

            case 2:thunder.addImage(thunderImage2);
            break;

            case 3:thunder.addImage(thunderImage3);
            break;
            
            case 4:thunder.addImage(thunderImage4);
            break;

            default:break
        }
        thunder.scale = random(0.25,0.65);
    }

    if(thunderFrameCount+15 === frameCount && thunder){
        thunder.destroy();
    }

    drawSprites();
}   