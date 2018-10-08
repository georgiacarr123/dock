describe("Ship", function(){
    let port
    let arrivalPort
    let ship

    beforeEach(function(){
        port = new Port();
        arrivalPort = new Port();
        ship = new Ship(port);
    });
    it("has a starting port", function(){
        expect(ship.getCurrentPort()).toBe(port);
    });
    it("Can set sail form the port", function(){
        ship.setSail();
        expect(ship.getCurrentPort()).toBeFalsy()
    });
    it("can dock at new port", function(){
        ship.dock(arrivalPort)
        expect(ship.getCurrentPort()).toBe(arrivalPort)
    });
}); 
