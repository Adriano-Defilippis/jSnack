// Utente inserisce due stringhe e stampo prima la più grande
var strUno, strDue, strUnoLengt, strDueLengt;

strUno = prompt('Inserisci la prima parola');
strDue = prompt('Inserisci la seconda parola');

strUnoLengt = strUno.length;
strDueLengt = strDue.length;

console.log(strUnoLengt);
console.log(strDueLengt);



if (strUnoLengt > strDueLengt) {
  console.log('la parola più lunga é: ' + strUno);
}else if (strUnoLengt < strDueLengt) {
  console.log('la parola più lunga é: ' + strDue);
} else {
  console.log('Le parole hanno la stessa lunghezza');
}
