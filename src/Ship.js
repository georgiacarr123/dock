function Ship(port){
this._port = port
currentPort = port
}
Ship.prototype = {
    getCurrentPort: function (){
        return currentPort
    }
}