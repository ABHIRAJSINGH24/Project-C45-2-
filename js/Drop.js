class Drop{
    constructor(x,y){
        var options={
            'isStatic':false,
            'friction':0.1,
            'restitution':0.7
        };

        this.x = x;
        this.y = y;

        this.body = Bodies.circle(this.x,this.y,15,options);
        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y>height){
            Body.setPosition(this.body,{x:random(100,500),y:random(0,100)});
        }
    }

    display(){
        fill(176,224,230);
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,15);
    }
}