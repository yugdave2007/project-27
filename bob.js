class bob{
	constructor(x,y,radius){
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:3
		}
		this.x=x;
		this.y=y;
		this.radius=radius
		this.body=Bodies.circle(this.x, this.y, (this.radius)/2, options)
		World.add(world, this.body);
}

	display(){
			
			var a=this.body.position;
			push()
			translate(a.x,a.y);
			ellipseMode(CENTER)
			fill("silver")
			ellipse(0,0,this.radius, this.radius);
			pop()
			
	}

}