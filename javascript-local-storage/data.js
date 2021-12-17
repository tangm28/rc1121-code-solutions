/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = [];
}
window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  var todosJSON = JSON.stringify(todos);
  this.localStorage.setItem('javascript-local-storage', todosJSON);
});
