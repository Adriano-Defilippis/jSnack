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
  console.log(strUno, strDue);

}else if (strUnoLengt < strDueLengt) {
  console.log('la parola più lunga é: ' + strDue);
  console.log(strDue, strUno);
} else {
  console.log('Le parole hanno la stessa lunghezza');
}
