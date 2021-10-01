
let player1 = new Player(10,330,27,140)
let player2 = new Player(863,330,27,140)
let ball = new Ball(430,390,6,3,32,32)
let isGameInProgress= true;
const speed = 10;


function randomRetning(){
ball.xspeed*=random([-1,1]);// dette sørger for at bolden skyder i en tilfældig
ball.yspeed*=random([-1,1]);// retning*/ 
};

function displayText(){
    fill('white');
    textSize(18);
    text("Player 1: " + player1.points + " Points",10,18)
    text("Player 2: " + player2.points + " Points",740,18)
}
// laver baggrund og sætter spillet til 60 frames pr sek
function setup(){
frameRate(60);
let canvas =createCanvas (900,700);
background('black');
randomRetning();
};

function draw(){
    background('black');
    displayText();
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
     
     // Her tjekkes der om spilleren er på vej ud af banen
     if(player1.y<=0){
         player1.movePlayer1(speed);
     };
     if(player1.y>=700-140){
         player1.movePlayer1(speed*(-1));
     };
     if(player2.y<=0){
         player2.movePlayer2(speed);
     };
     if(player2.y>=700-140){
         player2.movePlayer2(speed*(-1));
     };
}; 
if(isGameInProgress == false){
    background('black')
};
};


