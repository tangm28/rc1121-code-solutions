var num1 = 28;
var num2 = 16;
var num3 = 47;

var maximumValue = Math.max(num1, num2, num3);
console.log('The value of maximumValue: ', maximumValue);

var heroes = ['Iron Man', 'Captain America', 'Thor', 'Hulk'];
var randomNumber = Math.random();
randomNumber += randomNumber * heroes.length;

console.log('The value of randomNumber: ', randomNumber);

var randomIndex = Math.floor(randomNumber);
console.log('The value of randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('The value of randomHero: ', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'J.K Rowling'
  },
  {
    title: 'Percy Jackson',
    author: 'Rick Riordan'
  },
  {
    title: 'Flamecaster',
    author: 'Cinda Williams'
  }
];

var lastBook = library.pop();
console.log('The value of lastBook: ', lastBook);

var firstBook = library.shift();
console.log('The value of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1);
console.log('The value of library: ', library);

var fullName = 'Michael Tang';
var firstAndLastName = fullName.split(' ');
console.log('The value of firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('The value of sayMyName: ', sayMyName);
