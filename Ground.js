class Paper{

    cunstructor(x,y,w,h){
    var options={
    isStatic:true,
    restitution:0,
    friction:0.5,
    density:1.2
    
    }
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
    }
    
    }