var student = {
  firstName: 'Michael',
  lastName: 'Tang',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ' + fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Analyst';

console.log('value of livesInIrvine: ' + student.livesInIrvine);
console.log('value of previousOccupation: ' + student.previousOccupation);
console.log('value of student: ' + JSON.stringify(student));

var vehicle = {
  make: 'Tesla',
  model: 'Y',
  year: 2021,
  color: ['black'],
  isCovertible: [false]
};

console.log('value of vehicle: ' + JSON.stringify(vehicle));

var pet = {
  name: 'Clifford',
  type: 'Big Red'
};

delete pet.name;
delete pet.type;
console.log('value of pet: ' + JSON.stringify(pet));
