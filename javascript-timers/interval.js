var $countdownDisplay = document.querySelector('.countdown-display');

function countdown() {
  var start = parseInt($countdownDisplay.textContent) - 1;
  if (start > 0) {
    $countdownDisplay.textContent = start;
  } else {
    clearInterval(timerId);
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  }
}

var timerId = setInterval(countdown, 1.5 * 1000);
