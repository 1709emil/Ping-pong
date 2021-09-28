class Player{
    constructor(xa, ya, wit, hei){
this.x=xa;
this.y=ya;
this.with= wit;
this.height= hei;
this.points=0;
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
tegnBall(){// metoden tegner bolden
    fill('white');
    ellipse(this.xpos,this.ypos,this.with2,this.height2)
}
moveball(){//metoden flytter bolden

// Tjeker om bolden rammer toppen eller bunden af canvas og hvis den gøre 
// så ændres y retning af bolden 
if(ball.ypos-(ball.height2/2) <= 0 || ball.ypos+(ball.height2/2) >= 700){
ball.yspeed*=(-1)};
//
/*if(ball.xpos-(ball.with2/2) <= 0){
  if(player2.points != 10){
  player2.points ++
  this.RespawnBallAndPlayers();
  console.log(player2.points)}
  
};
if(ball.xpos+(ball.with2/2) >= 900){
    if(player1.points != 10 ){
    player1.points ++
    this.RespawnBallAndPlayers();
    console.log(player1.points)}

};*/

// Denne if statement tjekker om bolden rammer en af spillerne og skyder den tilbage
if((player1.y < ball.ypos && (player1.y+player1.height) > ball.ypos && ball.xpos-(ball.with2/2) <= player1.x+player1.with && ball.xpos-(ball.with2/2) >= player1.x+(player1.with/2))
||(player2.y < ball.ypos && (player2.y+player2.height) > ball.ypos && ball.xpos+(ball.with2/2) >=player2.x && ball.xpos+(ball.with2/2) >= player2.x-(player2.with/2)))
{
 ball.xspeed *=(-1.05)};

 this.xpos+=this.xspeed + 0.001;
this.ypos+=this.yspeed + 0.001;
};
/*RespawnBallAndPlayers(){
    player1.x = this.xa;
    player1.y = this.ya;
    player2.x = this.xa;
    player2.y = this.ya;
    ball.xpos = this.xp;
    ball.ypos = this.yp;
    randomRetning();

}*/


};