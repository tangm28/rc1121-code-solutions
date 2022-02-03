const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(numbers => {
  if (numbers % 2 !== 0) {
    return false;
  }
  return numbers;
});
console.log('The result of filtering for evenNumbers is: ', evenNumbers);

const overFive = numbers.filter(numbers => numbers > 5);
console.log('The result of filtering for overFive is: ', overFive);

const startWithE = names.filter(names => names.startsWith('E'));
console.log('The result of filtering for startWithE is: ', startWithE);

const haveD = names.filter(names => names.toLowerCase().includes('d'));
console.log('The result of filtering for haveD is: ', haveD);
