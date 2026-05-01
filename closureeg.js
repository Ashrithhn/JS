function createWallet(startingMoney) {
  var money = startingMoney;
  
  return {
    add: function(amount) { money += amount; },
    spend: function(amount) { money -= amount; },
    balance: function() { return money; }
  }
}

var myWallet = createWallet(500);
myWallet.add(200);
myWallet.spend(100);
console.log(myWallet.balance()); // 600
console.log(myWallet.money);     // undefined - try it!