let player1 = new Player(10,330,27,140)
let player2 = new Player(859,330,27,140)
let ball = new Ball(430,390,6,3,32,32)
let scoreForP1;
let scoreForP2;
let isGameInProgress= true;
const speed = 7;

// laver baggrund og sætter spillet til 60 frames pr sek
function setup(){
frameRate(20);
let canvas =createCanvas (900,700);
background('black');

ball.xspeed*=random([-1,1]);// dette sørger for at bolden skyder i en tilfældig
ball.yspeed*=random([-1,1]);// retning*/ 
};

function draw(){
    background('black');
if(isGameInProgress){
    player1.tegn();
    player2.tegn();
    ball.tegnBall();
    ball.moveball();
    
    // dette tjekker om hvis en af de knapper der bruges i spillet, bliver 
    //trykket og hvis den gør så flyt den spiller i den retning
    if(keyIsDown(87)){
       player1.movePlayer1(speed*(-1))
    };
    if(keyIsDown(83)){
       player1.movePlayer1(speed) 
    };
    if(keyIsDown(UP_ARROW)){
       player2.movePlayer2(speed*(-1))
    };
    if(keyIsDown(DOWN_ARROW)){
       player2.movePlayer2(speed)
    };
    ;
    // Denne if statment tjekker om bolden rammer en af spillerne og skyder den tilbage
   if((player1.y < ball.ypos && (player1.y+player1.height) > ball.ypos && ball.xpos-(ball.with2/2) <= player1.x+player1.with && ball.xpos-(ball.with2/2) >= player1.x+(player1.with/2))
   ||(player2.y < ball.ypos && (player2.y+player2.height) > ball.ypos && ball.xpos+(ball.with2/2) >=player2.x && ball.xpos+(ball.with2/2) >= player2.x-(player2.with/2)))
   {
    ball.xspeed *=(-1)
    ball.yspeed *=(-1)    
       
   };
    // Her tjekkes der om spilleren er på vej ud af banen
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

