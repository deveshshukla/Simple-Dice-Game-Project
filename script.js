'use strict'

let txtResult = document.querySelector('.txtResultHeding');

let diceOne = document.querySelector('.dice-1');
let diceTwo = document.querySelector('.dice-2');

const btnDice = document.getElementById('btnRollDice');
btnDice.addEventListener('click', function () {
    const random1 = Math.trunc(Math.random() * 6) + 1;
    const random2 = Math.trunc(Math.random() * 6) + 1;

    diceOne.src = `./Images/dice${random1}.png`;
    diceTwo.src = `./Images/dice${random2}.png`;

    winner(random1, random2);
});

const winner = (num1, num2) => {
    if (num1 > num2) {
        //Player-1 Winner
        txtResult.textContent = "Player-1 🎉";
        txtResult.style.fontSize = '5rem';

    } else if (num2 > num1) {
        //Player-2 Winner
        txtResult.textContent = "Player-2 🎉";
        txtResult.style.fontSize = '5rem';

    } else {
        //Draw
        txtResult.textContent = "Draw 🤝";
        txtResult.style.fontSize = '5rem';
    }
}