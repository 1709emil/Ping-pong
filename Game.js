let player1 = new Player(10,350,40,40)
let player2 = new Player(())
// laver baggrund og sætter spillet til 60 frames pr sek
function setup(){
frameRate(60);
let canvas =createCanvas (900,600);
background('black');
};
function draw(){
 player1.tegn();
 player2.tegn();
};