function Ship(port){
    this.port = port
currentPort = port
}
Ship.prototype = {

    getCurrentPort: function () {
        return currentPort
     },
   };