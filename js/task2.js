let welcomeWindow = confirm('Do you want to play a game?');
let keepPlaying = true;
if (!welcomeWindow) {
    keepPlaying = false;
    alert('You did not become a billionaire, but can');
}
let maxRandomNumber = 8;
let attemptLeft = 3;
let prize = 0;
let possiblePrizes = [100, 50, 25];
let quantityOfGames = 1;
while(keepPlaying) {
    let randomNumber = Math.ceil(Math.random() * maxRandomNumber);
    let isWinner = false;
    for (let i = 0; i<3; i++) {
        let currentPrize = possiblePrizes[i];
        let enterGame = prompt(`Enter a number of pocket on which the ball could land from 0 to ${maxRandomNumber}\n` 
        + `Attempt left: ${attemptLeft}\nTotal prize: ${prize}$\nPossible prize on current attempt: ${currentPrize}$`);
        if(Number(enterGame) === randomNumber) {
            alert(`Congratulation, you won! Your prize is: ${currentPrize}$`)
             prize = prize + currentPrize;
             isWinner = true;
             attemptLeft = 3;
            break;
        }
        attemptLeft -= 1;
        if (attemptLeft === 0) {
            attemptLeft = 3;
        }
        if(enterGame !== randomNumber && i === 2) {
           alert(`Thank you for your participation. Your prise is: ${prize}$`)
        }
    } 
    const confirmedNewGame = confirm('Do you want to continue?');
    if(!confirmedNewGame) {
        keepPlaying = false;
        alert('You did not become a billionaire, but can');
    }
    if(isWinner) {
        maxRandomNumber = maxRandomNumber + 4;
        for (let k = 0; k < 3; k++) {
            possiblePrizes[k] = possiblePrizes[k] * 2;
        }
    }
    quantityOfGames++;
}
