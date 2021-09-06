class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
        }

        this.x = x;
        this.y = y;
        
        this.body = Bodies.circle(this.x,this.y,140,options);
        World.add(world,this.body);

        this.image = loadImage("images/Walking Frame/walking_5.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,300,400);
    }
}