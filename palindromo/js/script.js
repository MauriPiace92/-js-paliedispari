// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// chiedere all'utente una parola.
var parolaUtente= prompt("inserisci una parola: ");
palindroma(parolaUtente);


// funzione per capire se palindroma:
function palindroma(parolaDaAnalizzare){

    var risultato;

   var parolaContrario='';
    for (var j= parolaDaAnalizzare.length-1; j >= 0; j--){

        var thisLettera = parolaDaAnalizzare[j];

        parolaContrario += thisLettera;
    }
    

    if(parolaDaAnalizzare == parolaContrario) {
        risultato="SIIIIIII! Parola Palindroma!";
    }
    else {
        risultato="NON è una parola palindroma!";   
    }

    return risultato;
}

alert(palindroma(parolaUtente));