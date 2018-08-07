import VendController from './app/components/vend/VendController.js'

import VendingMachine from './app/models/VendingMachine.js'



class App {
  constructor() {
    this.controllers = {
      vendController: new VendController(),
      vendingMachine: new VendingMachine()
    }
  }
}

//connects app to document exposing the app class
window.app = new App();