var $open = document.querySelector('.open');
var $modalContainer = document.querySelector('.modal-container');
var $noButton = document.querySelector('.no-button');
$open.addEventListener('click', function (event) {
  $modalContainer.setAttribute('class', 'row modal-container justify-center align-center overlay');
});

$noButton.addEventListener('click', function (event) {
  $modalContainer.setAttribute('class', 'row modal-container justify-center align-center hide');
});
