class Ball{
    constructor(x,y){
        var options = {
            isStatic:false,
            friction:1.2,
            density:5,
            restitution:1,
        }
        this.body=Bodies.circle(x,y,25,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        fill("purple")
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0,0,25,25)
        pop()
    }
}