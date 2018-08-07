import VendController from './app/components/vend/VendController.js'



class App {
  constructor() {
    this.controllers = {
      vendController: new VendController()
    }
  }
}

//connects app to document exposing the app class
window.app = new App();