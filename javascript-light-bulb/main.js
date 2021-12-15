var $lightBulb = document.querySelector('.light-bulb');
var $container = document.querySelector('.container');
var off = true;

$lightBulb.addEventListener('click', function () {
  if (off) {
    $lightBulb.setAttribute('class', 'light-bulb on');
    $container.setAttribute('class', 'container light');
    off = false;
  } else if (off === false) {
    $lightBulb.setAttribute('class', 'light-bulb off');
    $container.setAttribute('class', 'container dark');
    off = true;
  }
});
