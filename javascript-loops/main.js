/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log('value of each char: ', string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled[i] = numbers[i] * 2;
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  var item;
  for (item in object) {
    keys.push(item);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  var item;
  for (item in object) {
    values.push(object[item]);
  }
  return values;
}

console.log('value of getNumbersToTen(): ', getNumbersToTen());
console.log('value of getNumbersToTen(): ', getNumbersToTen());
console.log('value of getNumbersToTen(): ', getNumbersToTen());
console.log('value of getEvenNumbersToTwenty(): ', getEvenNumbersToTwenty());
console.log('value of getEvenNumbersToTwenty(): ', getEvenNumbersToTwenty());
console.log('value of getEvenNumbersToTwenty(): ', getEvenNumbersToTwenty());
console.log("value of repeatWord('repeat', 10): ", repeatWord('repeat', 10));
console.log("value of repeatWord('repeat', 10): ", repeatWord('repeat', 10));
console.log("value of repeatWord('repeat', 10): ", repeatWord('repeat', 10));

logEachCharacter('Hamburger');
logEachCharacter('Hamburger');
logEachCharacter('Hamburger');
console.log('value of doubleAll([1, 5, 12, 31, 24, 55]): ', doubleAll([1, 5, 12, 31, 24, 55]));
console.log('value of doubleAll([1, 5, 12, 31, 24, 55]): ', doubleAll([1, 5, 12, 31, 24, 55]));
console.log('value of doubleAll([1, 5, 12, 31, 24, 55]): ', doubleAll([1, 5, 12, 31, 24, 55]));

var person = {
  name: 'Michael',
  age: 27,
  hobby: 'coding'
};

console.log('value of getKeys(person): ', getKeys(person));
console.log('value of getKeys(person): ', getKeys(person));
console.log('value of getKeys(person): ', getKeys(person));
console.log('value of getValues(person): ', getValues(person));
console.log('value of getValues(person): ', getValues(person));
console.log('value of getValues(person): ', getValues(person));
