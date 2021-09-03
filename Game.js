let player1 = new Player(10,330,31,140)
let player2 = new Player(859,330,31,140)
let ball = new Ball(430,390,5,5,32,32)
let scoreForP1;
let scoreForP2;
let isGameInProgress= true;


// laver baggrund og sætter spillet til 60 frames pr sek
function setup(){
frameRate(60);
let canvas =createCanvas (900,700);
background('black');
ball.xspeed*=random([-1,1]);
ball.yspeed*=random([-1,1]);
};

function draw(){
    background('black');
if(isGameInProgress){
    player1.tegn();
    player2.tegn();
    ball.tegnBall();
    ball.moveball();
    if(keyIsDown(87)){
       player1.movePlayer1(-5)
    };
    if(keyIsDown(83)){
       player1.movePlayer1(5) 
    };
    if(keyIsDown(UP_ARROW)){
       player2.movePlayer2(-5)
    };
    if(keyIsDown(DOWN_ARROW)){
       player2.movePlayer2(5)
    };
    if(player1.y<=0){
        player1.movePlayer1(10);
    };
    if(player1.y>=700-140){
        player1.movePlayer1(-10);
    };
    if(player2.y<=0){
        player2.movePlayer2(10);
    };
    if(player2.y>=700-140){
        player2.movePlayer2(-10);
    };
 
} 
};

