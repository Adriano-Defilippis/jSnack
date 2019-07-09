// Inserisci un numero,
// se è pari stampa il numero, se è dispari stampa il numero successivo


// Funzione per verifica numero pari o dispari
function controlloPariDispari(input){

  var input, risultato;

  risultato = "PARI";

  if(input % 2 !== 0){

    risultato = "DISPARI";
  }

  console.log(risultato);
  return risultato;
}



// Funzione per avere un output sempre pari, se il numero inserito è dispari veerrà spampato num + 1
function stampaPari(esito){
  if (esito === "PARI") {

    console.log("Stampa numero pari  ", num);
    return num;
  } else if (esito === "DISPARI"){

    console.log("Stampa numero dispari + 1  ", num + 1);
    return num + 1;
  }

}


//Esecuzione del codice

var num = parseInt(prompt('inserisci un numero'));

var pariDispari = controlloPariDispari(num);

console.log("Imput dell' utente:  " ,num, " = ", pariDispari);


stampaPari(pariDispari);
