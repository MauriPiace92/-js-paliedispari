// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// l'utente sceglie pari o dispari e sceglie un numero e numero computer:
var pariODispari= prompt("Scegli pari o dispari?");
var numeroUtente= parseInt(prompt("Adesso scegli un numero da 1 a 5"));
var numeroComputer= Math.floor(Math.random() * 5) + 1;

console.log(pariODispari);

function analizza(x,y){
    var risultato;
    var somma=0;
    somma = x+y;

    if(somma % 2 == 0){
        risultato = "pari";
    }else{
        risultato = "dispari";
    }

    return risultato;   
}

console.log( analizza(numeroComputer, numeroUtente));

if (pariODispari == analizza(numeroComputer, numeroUtente)){
    alert("GRANDE GIOVE! HAI VINTO!!!!");
}else{
    alert("HAI PERSO!!!! Ritenta!!!");
}





