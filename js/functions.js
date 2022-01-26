const isValid = (number, min, max) => {
    if(isNaN(number) || number < min || number > max) return false;
    return true;
};

const getUserNumber = (min, max) => {
    let askNumber;
    while(!isValid(askNumber, min, max)){
        askNumber = parseInt(prompt('Inserisci uno dei numeri:').trim());
    }
    return askNumber;
};

const getRandomUniqueNumbers = (min, max, total) => {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min +1)) + min;

    const numbers = [];
    while (numbers.length < total) {
        const randomNumber = getRandomNumber(min, max);
        if(!numbers.includes(randomNumber)) numbers.push(randomNumber);
    }
    return numbers;
};