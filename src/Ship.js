function Ship(port) {
    this._port = port
    _currentPort = port
}
Ship.prototype = {
    getCurrentPort: function () {
        return _currentPort;
    },
    setSail: function () {
        if (this.getCurrentPort().getWeather().isStormy()) {
            throw new Error("Cannot sail in stormy weather")
        }
        _currentPort = null
    },
    dock: function (port) {
        this._currentPort = port;
        if(port.ships.length >= port.capacity)
        {
            throw new Error("port is at capacity")
        }
        else{
        port.addShip(this);
}
    }
}
