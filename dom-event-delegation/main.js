var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closestElement = event.target.closest('.task-list-item');
    closestElement.remove();
  }
});
