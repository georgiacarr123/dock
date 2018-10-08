describe('Ship', function () {

    let port;
    let ship;
  
    beforeEach(function () {
      port = new Port();
      ship = new Ship(port);
    });
    it('has a starting port', function () {
        expect(ship.getCurrentPort()).toBe(port);
        });
  });
