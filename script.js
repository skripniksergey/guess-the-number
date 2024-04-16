var secretNumber = Math.floor(Math.random() * 100) + 1;
var resultElement = document.getElementById("result");

function checkGuess() {
  var guessInput = document.getElementById("guessInput");
  var guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    resultElement.textContent = "Будь ласка, введіть число.";
    return;
  }

  if (guess === secretNumber) {
    resultElement.textContent = "Вітаємо! Ви вгадали число!";
  } else if (guess < secretNumber) {
    resultElement.textContent = "Спробуйте більше число.";
  } else {
    resultElement.textContent = "Спробуйте менше число.";
  }

  guessInput.value = "";
  guessInput.focus();
}