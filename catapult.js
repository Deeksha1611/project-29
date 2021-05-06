class CATAPULT{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 40
        }
        this.pointB = pointB
        this.catapult= Constraint.create(options);
        World.add(myworld, this.catapult);
    }

    fly(){
        this.catapult.bodyA = null;
    }

    display(){
        if(this.catapult.bodyA){
            var pointA = this.catapult.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}