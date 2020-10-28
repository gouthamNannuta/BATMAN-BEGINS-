const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thunder1,thunder2,thunder3,thunder4;
var drops=[];
var walkingBoy,walkingBoyimg;
//var drop;
var maxDrops=100;
function preload(){
    thunder1=loadImage("./images/thunderbolt/1.png")
    thunder2=loadImage("./images/thunderbolt/2.png")
    thunder3=loadImage("./images/thunderbolt/3.png")
    thunder4=loadImage("./images/thunderbolt/4.png")
    walkingBoyimg=loadImage("images/Walking Frame/walking_1.png");

  }

function setup(){
  createCanvas(410,800) ;

  engine = Engine.create();
  world = engine.world;
  //for(var i=0; i<maxDrops; i++){
   //drop.push(new Drop(random(0,400),random(0,400)));
 //}
 var options = {
  isStatic:true
}
 walkingBoy = new Boy(250,610,100,100,options);
// walkingBoy.addImage("walking", walkingBoyimg);
// walkingBoy.scale = 0.5;

}

function draw(){
    background(0);
    Engine.update(engine);
walkingBoy.display();
    if(frameCount%5===0){
        for (var i = 0; i <maxDrops; i++) {
            drops.push(new Drop(random(0,400),random(0,400)));
          }
    
    }
 
    
    for (var i = 0; i < drops.length; i++) {
        drops[i].display(); 
      } 
    if(frameCount%12===0){
      var rand = Math.round(random(1,4));
      switch(rand){
        case 1: image(thunder1, random(0,90),-22,390, 390);  
        break;
        case 2: image(thunder2, random(0,90),-22,390, 390);  
        break;
        case 3: image(thunder3, random(0,90),-22,390, 390);  
        break;
        case 4: image(thunder4, random(0,90),-22,390, 390);  
        break;

    }
      image(thunder1, 90,-22,390, 390);   
}
drawSprites();
}
  

