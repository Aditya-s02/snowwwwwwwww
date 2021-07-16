const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var snow = []
var maxSnow = 900
var randomX, randomY
var bg

 function preload() {
   bg = loadImage("snow2.jpg")

 }
function setup() {
  createCanvas(1000,600);
  engine = Engine.create()
  world = engine.world

  for (var i =0; i<maxSnow ; i++){
    snow.push(new Snow(random(0,500),random(0,500),20))
  }
  
}

function draw() {
  Engine.update(engine)
  background(bg);  
  for(var i = 0 ; i<maxSnow ; i++){
    snow[i].display()
  }
}