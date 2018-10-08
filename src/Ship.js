function Ship(port){
this._port = port
_currentPort = port
}
Ship.prototype = {
    getCurrentPort: function(){
        return _currentPort;
    },
    setSail: function(){
        if (this.getCurrentPort().getWeather().isStormy()){
            throw new Error("Cannot sail in stormy weather")
        }
        _currentPort = null
    },
    dock: function(arrivalPort){
         _currentPort = arrivalPort
    }
}
