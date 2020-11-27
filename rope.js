class Rope{
    constructor(bodyA,bodyB,ptx){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:150,
            stiffness:1.5
        }
        this.rope=Matter.Constraint.create(options)
        this.a=ptx
        World.add(world,this.rope)
    }
display(){
    var a=this.rope.bodyA.position
    var b=this.rope.bodyB.position
line(a.x,a.y,b.x+this.a,b.y)
}
}