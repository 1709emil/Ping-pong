class Player{
    constructor(xa, ya, wit, hei){
this.x=xa;
this.y=ya;
this.with= wit;
this.height= hei;
this.speedy=10;
    }

tegn(){// Tegner spillerne
    fill('white');
    rect(this.x,this.y,this.with,this.height)
    }
// disse metoder bruges af game.js til at får spillerne til at flyttes sig
movePlayer1(inp){
this.y +=(inp);
}
movePlayer2(inp2){
this.y +=(inp2);
}};

class Ball{
    constructor(xp,yp,xs,ys,wit2,hei2){
    this.xpos=xp;
    this.ypos=yp;
    this.xspeed=xs;
    this.yspeed=ys;
    this.with2=wit2;
    this.height2=hei2;

} 
tegnBall(){
    fill('white');
    ellipse(this.xpos,this.ypos,this.with2,this.height2)
}
moveball(){
this.xpos+=this.xspeed;
this.ypos+=this.yspeed;
}

};