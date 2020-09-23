class Dustbin
{
    constructor(x,y,width,height)
    {
     var options=
     {
        isStatic: true,
        restitution:0,
        friction:2,
        density:1.0
    }
     
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.image=loadImage("dustbin.png");
    World.add(world,this.body);
}
    display()
{
    var pos=this.body.position;

    image(this.image,this.body.position.x,this.body.position.y,60,60);

    rectMode(CENTER);
    fill("white");
    strokeWeight(5);
    stroke("white");
}
};