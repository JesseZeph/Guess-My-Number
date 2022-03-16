'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Guess the correct secretNumber? 🌝';

document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20; //state variable
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  //When there's no Input
  if (!guess) {
    // document.querySelector('.message').textContent = '❌ No Secret Number!';
    displayMessage('❌ No Secret Number!');

    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent =
    //   'BOOYAKATA!! 🎉 Correct Number Guessed.';
    displayMessage('BOOYAKATA!! 🎉 Correct Number Guessed.');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
    //TURNERY: i unified the former two conditions with turnery Operator
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Number Too High! 😉' : 'Number Too Low! 🙁';
      displayMessage(
        guess > secretNumber ? 'Number Too High! 😉' : 'Number Too Low! 🙁'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost The Game! 😭';
      displayMessage('Lost The Game! 😭');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Number Too High! 😉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost The Game! 😭';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Number Too Low! 🙁';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost The Game! 😭';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // displayMessage('Start Guessing? 😁');
  document.querySelector('.message').textContent = 'Start Guessing? 😁';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
