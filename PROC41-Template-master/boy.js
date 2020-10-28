class Boy{
    constructor(x, y,radius){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius =30;
        this.image = loadImage("images/Walking Frame/walking_1.png");       
        World.add(world, this.body);

    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
       
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image,-190,-140,350,350,);
        pop();
    }
}