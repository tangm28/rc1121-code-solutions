var $char = document.querySelectorAll('span');
var counter = 0;
window.addEventListener('keydown', function (event) {
  if (counter === $char.length) {
    return;
  }
  if (event.key === $char[counter].textContent) {
    $char[counter].setAttribute('class', 'correct');
    counter++;
    if (counter < $char.length) {
      $char[counter].setAttribute('class', 'underline');
    }
  } else {
    $char[counter].setAttribute('class', 'wrong');
  }
});
