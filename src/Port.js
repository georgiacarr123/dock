function Port(weather) {
    this._weather = weather
    this.ships = []
    this.capacity = 8
}
Port.prototype = {
    getWeather: function () {
        return this._weather
    },
    addShip: function (ship) {
        this.ships.push(ship)
    },
    getShips: function () {
        return this.ships;
    },
    getCapacity: function () {
        return this.capacity;
    }
}
