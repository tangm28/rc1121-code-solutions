/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount <= 0 || typeof amount !== 'number' || isNaN(amount) || !Number.isInteger(amount)) {
    return false;
  }
  var deposit = new Transaction('deposit', amount);
  this.transactions.push(deposit);
  return true;
};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || typeof amount !== 'number' || isNaN(amount) || !Number.isInteger(amount)) {
    return false;
  }
  var withdrawal = new Transaction('withdrawal', amount);
  this.transactions.push(withdrawal);
  return true;
};

Account.prototype.getBalance = function (amount) {
  var balance = 0;
  if (this.transactions.length === 0) {
    return balance;
  }
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
