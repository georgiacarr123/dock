describe('weather', function () {
    let weather
    beforeEach(function () {
        weather = new Weather();
    });
    it('can be stormy', function () {
        spyOn(Math, "random").and.returnValue(0);

        expect(weather.isStormy()).toBe(true);
    });

});