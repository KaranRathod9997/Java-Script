let pTag = document.getElementById("random_num");
let feedbackDiv = document.getElementById("feedback");
let guessInput = document.getElementById("guessInput");

let count = 0;
let r_num;
let min = 1;
let max = 20;

function isFloat(n) {
  return Math.floor(n) !== n;
}

function Startgame() {
  r_num = Math.floor(Math.random() * 20) + 1;
  console.log(r_num);
  min = 1;
  max = 20;
  count = 0;
  pTag.innerText = `Try to guess a number between ${min} and ${max}.`;
  feedbackDiv.innerHTML = '';
  guessInput.value = '';
}

function makeGuess() {
  let g_num = Number(guessInput.value);
  count++;

  if (isNaN(g_num) || isFloat(g_num)) {
    showFeedback("invalid", "Please enter a valid number.");
    return;
  }

  if (g_num < min || g_num > max) {
    showFeedback("warning", `Please enter a number between ${min} and ${max}.`);
    return;
  }

  if (g_num === r_num) {
    showFeedback("success", "Congratulations! You guessed the number!");
    pTag.innerText = `Random number was ${r_num}. Total attempts: ${count}.`;
    return;
  }

  if (g_num > r_num) {
    showFeedback("info", "Too high! Try again.");
    max = g_num - 1;
  } else {
    showFeedback("info", "Too low! Try again.");
    min = g_num + 1;
  }

  pTag.innerText = `Try a number between ${min} and ${max}.`;
  guessInput.value = '';
}

function showFeedback(type, message) {
  feedbackDiv.innerHTML = `<div class="alert ${type}">${message}</div>`;
}
