//PRIVATE PARTS

let total = 0


//dictionary
const currency = {
  quarter: .25,
  dime: .1,
  nickel: .05
}


//public to controller
class VendService {
  constructor() {
    this.total = 0
  }

  addMoney(type) {
    console.log('service: ', type)
    //confirm currency is acceptable
    if (currency[type]) {
      //add to total
      total += currency[type]
      total = parseFloat(total.toFixed(2))
    }
    return total
  }
}


export default VendService