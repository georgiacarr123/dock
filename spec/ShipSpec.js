describe("Ship", function(){
    let weather
    let port
    let arrivalPort
    let ship

    beforeEach(function(){
        weather = new Weather();
        port = new Port(weather);
        arrivalPort = new Port();
        ship = new Ship(port);
    });
    it("has a starting port", function(){
        expect(ship.getCurrentPort()).toBe(port);
    });
    it("Can set sail form the port", function(){
        spyOn(weather, "isStormy").and.returnValue(false)
        ship.setSail();
        expect(ship.getCurrentPort()).toBeFalsy()
    });
    it("can dock at new port", function(){
        ship.dock(arrivalPort)
        expect(ship.getCurrentPort()).toBe(arrivalPort)
    });
    it("doesn't set sail in stormy weather", function(){
        spyOn(weather, "isStormy").and.returnValue(true)

        expect(function(){
            ship.setSail()
        }).toThrowError("Cannot sail in stormy weather")
    })
}); 
