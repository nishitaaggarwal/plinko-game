const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;

  var divisions =[]; 
 var plinko =[]; 
 var particle=[];

  function setup() {
   createCanvas(700,800);
   engine = Engine.create();
   world = engine.world;
   ground = new Ground(300,790,1000,20)
for (var a = 0; a <=width; a= a + 80) {
 divisions.push(new Divisions(a, height-300/2, 10, 300));
 }
 for(var a=50; a<width; a= a + 50){
  plinko.push(new Plinko(a, 75))
 }
 for(var a =75; a<width-10; a= a + 50){
   plinko.push(new Plinko(a, 175))
 }
 for(var a =50; a<width; a= a + 50){
   plinko.push(new Plinko(a, 275))
 }
 }
 function draw() {
   background(0,0,0); 
   Engine.update(engine); 

   if(frameCount%60===0){
     particle.push(new Particle(random(width/2-40,width/2+40),10))
   }
   for (var y=0;y<particle.length; y++){
     particle[y].display();

   }
   for (var a=0;a<divisions.length; a++){
     divisions[a].display();
   }
   for (var a=0;a<plinko.length; a++){
     plinko[a].display();
   }
   ground.display();
    drawSprites();
 } 