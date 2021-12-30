var $carouselImg = document.getElementById('carousel-img');
var $progressDot = document.querySelectorAll('.fa-circle');
var $goBack = document.getElementById('go-back');
var $goNext = document.getElementById('go-next');
var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var counter = 0;

function carouselRotate() {
  counter++;
  if (counter === images.length) {
    counter = 0;
  }
  $carouselImg.setAttribute('src', images[counter]);
  $progressDot[counter].setAttribute('class', 'fas fa-circle');
  if (counter === 0) {
    $progressDot[$progressDot.length - 1].setAttribute('class', 'far fa-circle');
  } else {
    $progressDot[counter - 1].setAttribute('class', 'far fa-circle');
  }
}

function goBackImg(event) {
  clearInterval(intervalId);
  if (event.target.tagName === 'I') {
    if (counter === 0) {
      counter = images.length - 1;
      $carouselImg.setAttribute('src', images[counter]);
      $progressDot[counter].setAttribute('class', 'fas fa-circle');
      $progressDot[0].setAttribute('class', 'far fa-circle');
    } else {
      counter -= 1;
      $carouselImg.setAttribute('src', images[counter]);
      $progressDot[counter].setAttribute('class', 'fas fa-circle');
      $progressDot[counter + 1].setAttribute('class', 'far fa-circle');
    }
  }
  intervalId = setInterval(carouselRotate, 1.5 * 1000);
}

function goNextImg(event) {
  clearInterval(intervalId);
  if (event.target.tagName === 'I') {
    carouselRotate();
  }
  intervalId = setInterval(carouselRotate, 1.5 * 1000);
}

var intervalId = setInterval(carouselRotate, 1.5 * 1000);
$goBack.addEventListener('click', goBackImg);
$goNext.addEventListener('click', goNextImg);
