class Roof{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,250,20,options)
        World.add(world,this.body)
    }
    see(){
        
    var pos=this.body.position
fill("red")
rectMode(CENTER)
rect(pos.x,pos.y,250,20)
    }
}