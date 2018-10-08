function Port(weather){
    this._weather = weather
}
Port.prototype = {
    getWeather: function(){
        return this._weather
    }
}
