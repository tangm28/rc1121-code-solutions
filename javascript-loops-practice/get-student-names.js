/* exported getStudentNames */
function getStudentNames(students) {
  var nameArray = [];
  for (var i = 0; i < students.length; i++) {
    nameArray[i] = students[i].name;
  }
  return nameArray;
}
