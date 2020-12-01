class Paper{

cunstructor(x,y,r){
var options={
isStatic:true,
restitution:0.3,
friction:0.5,
density:1.2

}
this.x=this.xx
this.y=this.yy
this.r=this.r
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body)
}
display(){
    var pos = this.body.position;
}

}