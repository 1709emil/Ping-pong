 class Player{
    constructor(xa, ya, wit, hei){
this.x=xa;
this.y=ya;
this.with= wit;
this.height= hei;
this.speedy=10;
    }

tegn(){// Tegner spillerne
    fill('white')
    rect(this.x,this.y,this.with,this.height)
    }
// disse metoder bruges af game.js til at får spillerne til at flyttes sig
movePlayer1(){

}
movePlayer2(){

}




};

