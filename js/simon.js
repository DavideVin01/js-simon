// Generare 5 numeri casuali e mostrarli in un alert all'utente.
// Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.

const min = 1;
const max = 100;
const total = 5;
  
const numbers = getRandomUniqueNumbers(min, max, total);

console.log(numbers);

alert(numbers);

const userNumbers = [];
const correctNumbers = [];

setTimeout(() => {
    while (userNumbers.length < total){
        const askNumber = getUserNumber(min, max);
        if(userNumbers.includes(askNumber)) {
            alert('Hai già scelto questo numero');
        } else {
            userNumbers.push(askNumber);
            if (numbers.includes(askNumber)) correctNumbers.push(askNumber);
        }
    }
    
    let verifyMessage = 'Non hai indovinato nessun numero.';
    
    if (correctNumbers.length){
        verifyMessage = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers}`;
    }
    alert(verifyMessage);
}, 3000);