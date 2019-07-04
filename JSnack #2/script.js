// Utente inserisce due stringhe e stampo prima la più grande
var strUno, strDue, strUnoLengt, strDueLengt, risultato;

strUno = prompt('Inserisci la prima parola');
strDue = prompt('Inserisci la seconda parola');

strUnoLengt = strUno.length;
strDueLengt = strDue.length;

risultato = document.getElementById('risultato');

console.log(strUnoLengt);
console.log(strDueLengt);



if (strUnoLengt > strDueLengt) {

  risultato.innerHTML = 'la parola più lunga é: ' + strUno + '.' + '<br>' + 'La stinga ordinata é: ' + strUno + ', ' + strDue ;

  console.log('la parola più lunga é: ' + strUno);
  console.log(strUno, strDue);

}else if (strUnoLengt < strDueLengt) {

  risultato.innerHTML = 'la parola più lunga é: ' + strDue + '.' +  '<br>' + 'La stinga ordinata é: ' + strDue + ', ' + strUno ;

  console.log('la parola più lunga é: ' + strDue);
  console.log(strDue, strUno);

} else {

  risultato.innerHTML = 'Le parole hanno la stessa lunghezza';

  console.log('Le parole hanno la stessa lunghezza');

}
