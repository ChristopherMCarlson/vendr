import VendingMachine from '../../models/VendingMachine.js'

//PRIVATE PARTS


const vendingMachine = new VendingMachine()


//public to controller
class VendService {
  constructor() {
    this.total = 0
  }

  addMoney(type) {
    console.log('service: ', type)

    let total = vendingMachine.addMoney(type)
    return total
  }

  vend(item) {
    console.log('service: ', item);
    let vendItem = vendingMachine.vend(item)
    return vendItem
  }

  getRemainder() {
    let remainder = vendingMachine.getRemainder();
    return remainder;
  }
}


export default VendService