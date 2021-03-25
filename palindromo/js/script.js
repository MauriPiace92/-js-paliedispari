// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// chiedere all'utente una parola.
var parolaUtente= prompt("inserisci una parola: ");
console.log(parolaUtente);

// funzione per capire se palindroma:
function palindroma(parolaUtente){

    var risultato;

    for (var i= 0; i< parolaUtente.length; i++){

        var dritta = parolaUtente[i];
        console.log(parolaUtente[i]);
    }
    
    for (var j= parolaUtente.length; j >= 0; j--){

        var rovescio = parolaUtente[j];
        console.log(parolaUtente[j]);    
    }
    

    if(dritta == rovescio) {
        risultato="SIIIIIII! Parola Palindroma!";
    }
    else {
        risultato="NON è una parola palindroma!";   
    }

    return risultato;
}

alert(palindroma(parolaUtente));