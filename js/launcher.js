class Launcher{

    constructor(bodyA, pointB){

        var Options = {

            bodyA : bodyA,
            pointB : pointB,
            length : 20,
            stiffness : 0.01

        }

        this.pointB = pointB;

        this.launcher = Constraint.create(Options);
        World.add(world, this.launcher);

    }

    attach(body){

        this.launcher.bodyA = body;

    }

    fly(){

        this.launcher.bodyA = null;

    }

    display(){

       if(this.launcher.bodyA){

        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

       }

    }

}