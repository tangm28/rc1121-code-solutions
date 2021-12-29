/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || typeof balance !== 'number' || isNaN(balance) || !Number.isInteger(balance)) {
    return null;
  }
  var account = new Account(this.nextAccountNumber, holder);
  account.deposit(balance);
  this.accounts.push(account);
  this.nextAccountNumber++;
  return account.number;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var getTotalAssets = 0;
  if (this.accounts.length === 0) {
    return getTotalAssets;
  }
  for (var i = 0; i < this.accounts.length; i++) {
    getTotalAssets += this.accounts[i].getBalance();
  }
  return getTotalAssets;
};
