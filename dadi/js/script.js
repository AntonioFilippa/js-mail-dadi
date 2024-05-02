


//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer


//numero random da 1 a 6 player1
alert("TOCCA AL GIOCATORE 1");

var player1Num= Math.floor(Math.random() * 6) + 1;

//MOSTRARE IN CONSOLE

console.log(player1Num);




//numero random da 1 a 6 player 2

alert("TOCCA AL GIOCATORE 2");

var player2Num= Math.floor(Math.random() * 6) + 1;

//MOSTRARE IN CONSOLE

console.log(player2Num);

//confrontare numero player 1 e player 2

//Stabilire il vincitore, in base a chi fa il punteggio più alto.

if(player1Num > player2Num){
    console.log("il giocatore 1 ha vinto");
}
    else if(player1Num < player2Num){
        console.log("il giocatore 2 ha vinto");
    }
    else if(player1Num == player2Num){
        console.log("pareggio");
    }






