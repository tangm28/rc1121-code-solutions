var clickCounter = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function () {
  clickCounter++;
  $clickCount.textContent = 'Clicks: ' + clickCounter;
  if (clickCounter < 4) {
    $hotButton.setAttribute('class', 'hot-button cold');
  } else if (clickCounter < 7) {
    $hotButton.setAttribute('class', 'hot-button cool');
  } else if (clickCounter < 10) {
    $hotButton.setAttribute('class', 'hot-button tepid');
  } else if (clickCounter < 13) {
    $hotButton.setAttribute('class', 'hot-button warm');
  } else if (clickCounter < 16) {
    $hotButton.setAttribute('class', 'hot-button hot');
  } else if (clickCounter >= 16) {
    $hotButton.setAttribute('class', 'hot-button nuclear');
  }
}
);
