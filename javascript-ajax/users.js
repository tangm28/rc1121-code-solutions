var $userList = document.getElementById('user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var tempLi = document.createElement('li');
    tempLi.textContent = xhr.response[i].name;
    $userList.appendChild(tempLi);
  }
});
xhr.send();
