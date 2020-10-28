class Drop{
constructor(x, y) {

    var rainoptions = {
     //' restitution':0.1,
     'friction':0.1,
     //density:1.0,
'isStatic':false
    }
    this.r=3;
  
    this.body = Bodies.circle(x, y, this.r,rainoptions);
    World.add(world, this.body);
      if(this.body.position>height){
      Matter.body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
      }
}
display() {
    
    var pos = this.body.position;
   var angle = this.body.angle;
   
   push();
   translate(pos.x, pos.y);
   rotate(angle);
    fill("blue")
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r,this.r);
    pop();
    
}
}
