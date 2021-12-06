var colors = ['red', 'white', 'blue'];

for (var i = 0; i < colors.length; i++) {
  console.log('value of colors [' + i + ']: ', colors[i]);
}

console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2]);

colors[2] = 'green';

console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2]);

console.log('value of colors: ', colors);

var students = ['Leonardo', 'Donatello', 'Raphael', 'Michelangelo'];
var numberOfStudents = students.length;
var lastIndex = numberOfStudents - 1;
console.log('value of lastIndex: ', lastIndex);
console.log('value of students: ', students);
