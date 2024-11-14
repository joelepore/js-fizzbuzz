/*
  ## Consegna:
  Scrivi un programma che stampi i numeri da 1 a 100,

  ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.

  Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

  Prima di partire a scrivere codice poniamoci qualche domanda:

  - Come faccio a sapere se un numero è divisibile per?
  - Abbiamo visto qualcosa di particolare che possiamo usare?

  ## Svolgimento
  1. Dichiaro tutte le variabili con i dati noti
  2. Sviluppo la logica e stampo gli output
*/

// 1.
const min = 1;
const max = 100;
const fizzMultiple = 3;
const buzzMultiple = 5;
const fizzMessage = 'Fizz';
const buzzMessage = 'Buzz';
const bothMessage = 'FizzBuzz';

//2.
let message;

for (let i = min; i <= max; i++) {
  if (i % fizzMultiple === 0 && i % buzzMultiple === 0) {
    message = bothMessage;
  } else if (i % fizzMultiple === 0) {
    message = fizzMessage;
  } else if (i % buzzMultiple === 0) {
    message = buzzMessage;
  } else {
    message = i;
  }
  console.log(message);
}