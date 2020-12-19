 class Slingshot{
constructor(bodyA,pointB){
    var options={
bodyA:bodyA,
pointB:pointB,
length:20,
stiffness:0.01
 }
this.body=Constraint.create(options)
this.pointB=pointB
World.add(world,this.body)


}
display(){
if(this.body.bodyA){

var posA =this.body.bodyA.position
var posB=this.pointB
}
strokeWeight(5)
line(posA.x,posA.y,posB.x,posB.y)

}
fly(){
    this.body.bodyA=null;
}


}