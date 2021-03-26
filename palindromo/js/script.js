// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// chiedere all'utente una parola.
var parolaUtente= prompt("inserisci una parola: ");
palindroma(parolaUtente)


// funzione per capire se palindroma:
function palindroma(parolaDaAnalizzare){

    var risultato;

    for (var i= 0; i< parolaDaAnalizzare.length; i++){

        var dritta = parolaDaAnalizzare[i];
        console.log(parolaDaAnalizzare[i]);
    }
    
    for (var j= parolaDaAnalizzare.length; j >= 0; j--){

        var rovescio = parolaDaAnalizzare[j];
        console.log(parolaDaAnalizzare[j]);    
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