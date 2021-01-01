class Ground{

constructor(){
    this.x=400;
    this.y=680;
    this.w=800;
    this.h=10;

    this.body=Bodies.rectangle(this.x,this.y,this.w,this.h);
    
    World.add(world,this.body)
   
}
display(){
    var pos=this.body.position;
    rect(pos.x,pos.y,this.w,this.h);
    Matter.Body.setStatic(this.body,true)
}




}