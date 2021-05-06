class BOX{
    constructor(x,y){
        var options={
            restitution:0.4
        }


        this.body=Bodies.rectangle(x,y,30,40,options);
        this.width=30
        this.height=40
        World.add(myworld,this.body);



    }

display(){
   
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    

}
}
