class Dustbin{

    cunstructor(x,y,r){
        var options={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
        
        }
        this.x=this.x
        this.y=this.y
        this.w=this.w
        this.h=this.h
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        World.add(world,this.body)
        }
        display(){
            var pos = this.body.position;
        }




}