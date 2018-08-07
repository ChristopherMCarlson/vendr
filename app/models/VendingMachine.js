class VendingMachine {
  constructor(transactionTotal, acceptableCurrency, foodItems, machineTotal) {
    this.transactionTotaltransactionTotal = 0
    this.acceptableCurrency = {
      quarter: .25,
      dime: .1,
      nickel: .05,
    }
    this.fooditems = [{
      id: 'a1',
      img: 'https://www.fritolay.com/images/default-source/blue-bag-image/fritos-original.png?sfvrsn=b704563a_2',
      price: 1.25,
      quantity: 10
    }, {
      id: 'a2',
      img: 'https://pbs.twimg.com/profile_images/824647153721106432/gwLIQxqy_400x400.jpg',
      price: 2.00,
      quantity: 1
    }, {
      id: 'a3',
      img: 'http://www.mountaindew.com/assets/content/38195/20881/21892-grew-dew-product.png',
      price: .75,
      quantity: 15
    }]
    this.machineTotal = 10
  }
  addMoney(currency) {
    //validate coin
    //increase total
    //return total
  }

  vend(foodId) {
    //find item
    //if transactionTotal >= item.price && item.quantity > 0
    //item quantity --
    //transactionTotal -= item.price
    //machineTotal += item.price
    //return item.img
  }
  giveChange() {
    //transactionTotal = 0
  }

  getItems() {
    return this.fooditems
  }


}


export default VendingMachine