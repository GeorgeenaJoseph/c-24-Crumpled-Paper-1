class Paper{

 constructor(){
     var options={
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2
     }
    this.diameter=20
    this.body=Bodies.circle(200,450,this.diameter,options);

    World.add(world,this.body)

 }


 display(){

    var pos=this.body.position;
    ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,this.diameter)
 }
}