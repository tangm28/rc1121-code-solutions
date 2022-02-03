const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sumReducer = (previousValue, currentValue) => previousValue + currentValue;
const sum = numbers.reduce(sumReducer);
console.log('The value of sum is: ', sum);

const productReducer = (previousValue, currentValue) => previousValue * currentValue;
const product = numbers.reduce(productReducer);
console.log('The value of product is: ', product);

const accounttReducer = (previousValue, currentValue) => {
  let balance = 0;
  if (isNaN(Number(previousValue))) {
    if (previousValue.type === 'withdrawal') {
      balance += (previousValue.amount * -1);
    } else {
      balance += previousValue.amount;
    }
  } else {
    balance = previousValue;
  }
  if (currentValue.type === 'withdrawal') {
    balance += (currentValue.amount * -1);
  } else {
    balance += currentValue.amount;
  }
  return balance;
};
const balance = account.reduce(accounttReducer);
console.log('The value of balance is: ', balance);

const compositeReducer = (previousValue, currentValue) => Object.assign(previousValue, currentValue);
const composite = traits.reduce(compositeReducer);
console.log('The value of composite is: ', composite);

// how reduce works
// const array = [15, 16, 17, 18, 19];

// function reducer(previous, current, index, array) {
//   const returns = previous + current;
//   console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
//   return returns;
// }

// array.reduce(reducer);
