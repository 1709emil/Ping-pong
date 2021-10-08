
let player1 = new Player(10,330,27,140)
let player2 = new Player(863,330,27,140)
let ball = new Ball(430,390,6,3,32,32)
let isGameInProgress= true;
const speed = 10;


function randomDirection(){
ball.xspeed*=random([-1,1]);// dette sørger for at bolden skyder i en tilfældig
ball.yspeed*=random([-1,1]);// retning*/ 
};

//Viser hvor mange points hver spiller har.
function displayText(){
    fill('white');
    textSize(18);
    text("Player 1: " + player1.points + " Points",10,18)
    text("Player 2: " + player2.points + " Points",740,18)
};


// laver baggrund og sætter spillet til 60 frames pr sek
function setup(){
frameRate(60);
let canvas =createCanvas (900,700);
randomDirection();
};

function draw(){
    // tjekker om spillet er igang og hvis det er så skal den kalde nogle metoeder
    if(isGameInProgress){
        background('black');
        displayText();
        player1.tegn();
        player2.tegn();
        ball.drawBall();
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
    // Hvis spillet ikke er igang må der være en spiller der har vundet
    // Der visses så hvilken spiller der har vundet 
    if(isGameInProgress === false){
        background('red')
        if(player1.points == ball.winScore){
            fill('white')
            textSize(35)
            text("Player 1 har vundet !!!",300,350);}
    
            if(player2.points == ball.winScore){
            fill('white')
            textSize(35)
            text("Player 2 har vundet !!!",300,350);}
};
};


