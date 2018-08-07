import VendService from "./VendService.js"

// PRIVATE PARTS

const vendService = new VendService()

function draw(total) {
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
    console.log('controller: ', cur);
    let total = vendService.addMoney(cur)
    console.log('returned to controler: ', total)
    //used to send money to the service
    draw(total)
  }

}

export default VendController