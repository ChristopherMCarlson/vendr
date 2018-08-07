import VendService from "./VendService.js"

import VendingMachine from "../../models/VendingMachine.js";

// PRIVATE PARTS

const vendService = new VendService()

const vm = new VendingMachine()

function drawTransTotal(total) {
  document.getElementById('total').innerText = total;
}

//PUBLIC PARTS
//Controllers are used for geting user input
//updating screen 
//sending and receiving data from Service
class VendController {
  constructor() {

  }



  addMoney(cur) {
    let total = vendService.addMoney(cur)
    drawTransTotal(total)
  }


  vendItem(item) {
    // console.log('controller: ', item);
    let vendItem = vendService.vend(item);
    document.getElementById('vended-item').innerHTML = vendItem;
    this.getRemainder()
  }

  getRemainder() {
    let remainder = vendService.getRemainder();
    drawTransTotal(remainder);
  }
}

export default VendController