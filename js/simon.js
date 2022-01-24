// Generare 5 numeri casuali e mostrarli in un alert all'utente.
// Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let message = 'Memorizza questi numeri:';

for (let i = 0; i < 5; i++){
    const randomNumber = getRandomNumber(1, 100);
    message += ' ' + randomNumber;
}
alert(message);