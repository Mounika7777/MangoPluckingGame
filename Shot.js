class Shot{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.07,
            length: 5

           
        }
        this.pointB = pointB;
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
    }
    attach(body){
		this.shot.bodyA=body;
	}
    
    fly(){
        this.shot.bodyA = null;
    }
    display(){
        if(this.shot.bodyA){
        var pointA = this.shot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}