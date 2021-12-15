function handleFocus(event) {
  console.log('focus event was fired');
  console.log('value of name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('value of name: ', event.target.name);
}

function handleInput(event) {
  console.log('value of name: ', event.target.name);
  console.log('value of value: ', event.target.value);
}

var $input = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-message');

$input.addEventListener('focus', handleFocus);
$input.addEventListener('blur', handleBlur);
$input.addEventListener('input', handleInput);
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);
$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
