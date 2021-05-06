class STAND{
        constructor(){
            var options={
                isStatic:true,
            }


            this.body=Bodies.rectangle(390,300,250,10,options);
            this.width=250
            this.height=10
            World.add(myworld,this.body);



        }

    display(){
        fill("black")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        

    }
}
