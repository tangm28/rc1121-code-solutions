/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// function isUnderFive(number) {
//   if (number < 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isUnderFive(number) {
  return number < 5;
}

// console.log('value of isUnderFive(4): ', isUnderFive(4));
// console.log('value of isUnderFive(10): ', isUnderFive(10));
// console.log('value of isUnderFive(5): ', isUnderFive(5));

function isEven(number) {
  return number % 2 === 0;
}

// console.log('value of isEven(4): ', isEven(4));
// console.log('value of isEven(10): ', isEven(10));
// console.log('value of isEven(5): ', isEven(5));

function startsWithJ(string) {
  return string[0] === 'J';
}

// console.log('value of startsWithJ('JavaScript'): ', startsWithJ('JavaScript'));
// console.log('value of startsWithJ('PHP'): ', startsWithJ('PHP'));
// console.log('value of startsWithJ('HTML'): ', startsWithJ('HTML'));
// console.log('value of startsWithJ('Java'): ', startsWithJ('Java'));
// console.log('value of startsWithJ('Kotlin'): ', startsWithJ('Kotlin'));
// console.log('value of startsWithJ('C#'): ', startsWithJ('C#'));

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

// var bart = {
//   name: 'Bartholomew JoJo Simpson',
//   age: 10
// };

// console.log('value of isOldEnoughToDrink(bart): ', isOldEnoughToDrink(bart));

function isOldEnoughToDrive(person) {
  return person.age >= 18;
}

// var homer = {
//   name: 'Homer Jay Simpson',
//   age: 39
// };

// console.log('value of isOldEnoughToDrive(homer): ', isOldEnoughToDrive(homer));

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  } else if (pH < 7) {
    return 'acid';
  } else if (pH > 7) {
    return 'base';
  } else {
    return 'neutral';
  }
}

// console.log('value of categorizeAcidity(-1): ', categorizeAcidity(-1));
// console.log('value of categorizeAcidity(14.0000001): ', categorizeAcidity(14.0000001));
// console.log('value of categorizeAcidity(7): ', categorizeAcidity(7));
// console.log('value of categorizeAcidity(2): ', categorizeAcidity(2));
// console.log('value of categorizeAcidity(9): ', categorizeAcidity(9));

function introduceWarnerBro(name) {
  if (name === 'yakko') {
    return "We're the warner brothers!";
  } else if (name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else if (name === 'cody') {
    return 'Goodnight everybody!';
  } else if (name === 'minerva') {
    return 'Goodnight everybody!';
  }
}

// console.log('value of introduceWarnerBro('yakko'): ', introduceWarnerBro('yakko'));
// console.log('value of introduceWarnerBro('wakko'): ', introduceWarnerBro('wakko'));
// console.log('value of introduceWarnerBro('dot'): ', introduceWarnerBro('dot'));
// console.log('value of introduceWarnerBro('cody'): ', introduceWarnerBro('cody'));
// console.log('value of introduceWarnerBro('minerva'): ', introduceWarnerBro('minerva'));
