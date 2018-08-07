class VendingMachine {
  constructor(transactionTotal, acceptableCurrency, foodItems, machineTotal) {
    this.transactionTotal = 0
    this.acceptableCurrency = {
      quarter: .25,
      dime: .1,
      nickel: .05,
    }
    this.foodItems = [{
      id: 'a1',
      img: '<img src="https://www.fritolay.com/images/default-source/blue-bag-image/fritos-original.png?sfvrsn=b704563a_2" alt="">',
      price: 1.25,
      quantity: 10
    }, {
      id: 'a2',
      img: '<img src="https://pbs.twimg.com/profile_images/824647153721106432/gwLIQxqy_400x400.jpg" alt="">',
      price: 2.00,
      quantity: 1
    }, {
      id: 'a3',
      img: '<img src="http://www.mountaindew.com/assets/content/38195/20881/21892-grew-dew-product.png" alt="">',
      price: .75,
      quantity: 15
    }]
    this.machineTotal = 10
  }
  addMoney(type) {
    //validate coin
    //increase total
    //return total
    if (this.acceptableCurrency[type]) {
      this.transactionTotal += this.acceptableCurrency[type]
      this.transactionTotal = parseFloat(this.transactionTotal.toFixed(2))
      return this.transactionTotal;
    }
    else {
      return "invalid amount"
    }
  }

  vend(item) {
    let newFood = this.foodItems.find(food => food.id == item);
    if (this.transactionTotal >= newFood.price && newFood.quantity > 0) {
      newFood.quantity--;
      this.transactionTotal -= newFood.price;
      this.machineTotal += newFood.price;
      return newFood.img;
    } else if (this.transactionTotal < newFood.price) {
      return 'Insufficiant Funds'
    } else {
      return 'Out of Stock'
    }
  }

  getRemainder() {
    return this.transactionTotal;
  }


  giveChange() {
    //transactionTotal = 0
  }

  getItems() {
    return this.foodItems
  }


}


export default VendingMachine