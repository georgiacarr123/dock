function Ship(port){
this._port = port
_currentPort = port
}
Ship.prototype = {
    getCurrentPort: function(){
        return _currentPort;
    },
    setSail: function(){
        _currentPort = null
    },
    dock: function(arrivalPort){
         _currentPort = arrivalPort
    }
}
