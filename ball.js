class BALL{
    constructor(x,y,r){
        var options={
            isStatic:true,
           
        }

        this.body=Bodies.circle(x,y,r,options)
        this.radius=r;
        World.add(myworld,this.body);


    }
    display(){
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius);


    }
}
