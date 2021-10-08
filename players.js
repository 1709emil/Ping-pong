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
    this.index = 0;
    this.Sxpos=this.xpos;
    this.Sypos=this.ypos;
    this.StartSpeed= xs;
    this.winScore= 5;
} 
drawBall(){// metoden tegner bolden
    fill('white');
    ellipse(this.xpos,this.ypos,this.with2,this.height2)
}
moveball(){//metoden flytter bolden

    if(player1.points == this.winScore){
        isGameInProgress = false;
        };
        
    if(player2.points == this.winScore){
        isGameInProgress = false;
        };

// Tjeker om bolden rammer toppen eller bunden af canvas og hvis den gøre 
// så ændres y retning af bolden 
if(ball.ypos-(ball.height2/2) <= 0 || ball.ypos+(ball.height2/2) >= 700){
ball.yspeed*=(-1)};

if(ball.xpos-(ball.with2/2) <= 0){
    this.addScore(player2);
    this.RespawnBallAndPlayers();
    
};
if(ball.xpos+(ball.with2/2) >= 900){
    this.addScore(player1);
    this.RespawnBallAndPlayers();
};

// Denne if statement tjekker om bolden rammer en af spillerne og skyder den tilbage
if((player1.y < ball.ypos && (player1.y+player1.height) > ball.ypos && ball.xpos-(ball.with2/2) <= player1.x+player1.with && ball.xpos-(ball.with2/2) >= player1.x+(player1.with/2))
||(player2.y < ball.ypos && (player2.y+player2.height) > ball.ypos && ball.xpos+(ball.with2/2) >=player2.x && ball.xpos+(ball.with2/2) >= player2.x-(player2.with/2)))
{
 ball.xspeed *=(-1.05)};

 this.xpos+=this.xspeed + 0.001;
 this.ypos+=this.yspeed + 0.001;
};

// Giver den spiller der har scoret et point
addScore(plr){
if(plr.points != this.winScore){
if(this.index <1){
    plr.points ++
    this.index ++
};
if(this.index == 1){
    this.index =0;
    return;};
};
};
// resetter boldens position og giver den en tilfældig start retning
RespawnBallAndPlayers(){
    ball.xpos = this.Sxpos;
    ball.ypos = this.Sypos;
    ball.xspeed=this.StartSpeed;
    randomDirection();
 
};


};