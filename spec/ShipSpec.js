describe("Ship", function () {
    let weather
    let port
    let arrivalPort
    let ship

    beforeEach(function () {
        weather = new Weather();
        port = new Port(weather);
        arrivalPort = new Port();
        ship = new Ship(port);
    });
    it("has a starting port", function () {
        expect(ship.getCurrentPort()).toBe(port);
    });
    it("Can set sail form the port", function () {
        spyOn(weather, "isStormy").and.returnValue(false)
        ship.setSail();
        expect(ship.getCurrentPort()).toBeFalsy()
    });
    it("can dock at new port", function () {
        ship.dock(port)
        expect(ship.getCurrentPort()).toBe(port)
    });
    it("doesn't set sail in stormy weather", function () {
        spyOn(weather, "isStormy").and.returnValue(true)

        expect(function () {
            ship.setSail()
        }).toThrowError("Cannot sail in stormy weather")
    })
    it('instructs the port to add the ship', function () {
        spyOn(arrivalPort, "addShip");

        ship.dock(arrivalPort);

        expect(arrivalPort.addShip).toHaveBeenCalledWith(ship)
    });
    it('doesnt dock if port is at capacity', function () {
        for ( i = 0; i < 8; i++) {
            ship.dock(port);
        }
        expect(function () {
            ship.dock(port)
        }).toThrowError("port is at capacity")
    });
})
