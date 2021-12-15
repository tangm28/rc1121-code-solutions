var $form = document.querySelector('#contact-form');
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var messageData = {};
  var inputs = document.getElementById('contact-form').elements;
  for (var i = 0; i < inputs.length - 1; i++) {
    messageData[inputs[i].name] = inputs[i].value;
  }
  console.log('messageData: ', messageData);
}
);
