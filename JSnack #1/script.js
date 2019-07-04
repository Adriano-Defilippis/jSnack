// Utente inserisce due numeri e restituisco il più grande
var numUno, numDue;

numUno = prompt('inserisci il primo numero');
numUno = parseInt(numUno);

numDue = prompt('inserisci il secondo numero');
numDue = parseInt(numDue);


if (numUno>numDue) {
  console.log('Il numero più grande è: ' + numUno);
} else if(numDue>numUno) {
  console.log('Il numero più grande è: ' + numDue);
} else {
  console.log('I numeri sono uguali');
}
