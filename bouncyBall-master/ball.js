class Ball{
constructor(x,y,width,heigth,){
    var ball_options ={restitution: 1.0,density:0.1,friction:0}

    this.ball = Bodies.rectangle(x,y,width,heigth,ball_options);
    this.width=width
    this.height=heigth
    World.add(world,this.ball);

}
rectangle(){
rotate (this.ball.angle)
rectMode(CENTER)
rect(this.ball.position.x,this.ball.position.y,this.width,this.height)}}