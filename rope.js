class rope{
    constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		console.log(options);
		this.ropes=Constraint.create(options)
		World.add(world,this.ropes)
	}
    display(){
        var posA= this.ropes.bodyA.position
         var posb=this.ropes.bodyB.position
        strokeWeight(2);
        line(posA.x,posA.y,posb.x+this.offsetX,posb.y+this.offsetY)
    }
}

