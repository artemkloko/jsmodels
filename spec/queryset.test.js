describe("Queryset", function () {

    describe("Queryset instantiate", function () {

        it("should not be successfull", function (done) {
            // action
            var queryset = function () {
                return new Queryset();
            };
            // assertions
            expect(queryset).toThrow();
            done();
        });
    });

    describe("Queryset create factory", function () {

        it("should be successfull", function (done) {
            // action
            var queryset = function () {
                return Queryset();
            };
            // assertions
            expect(queryset).not.toThrow();
            done();
        });

        it("should validate input argument (config)");
        it("add input argument (config) contents on every factory instance");
    });

    describe("FactoryQueryset instantiate", function () {

        var FactoryQueryset = Queryset();

        it("should be successfull", function (done) {
            // action
            var queryset = function () {
                return new FactoryQueryset('Foo');
            };
            // assertions
            expect(queryset).not.toThrow();
            expect(queryset()).toBeDefined();
            expect(queryset()).not.toBeNull();
            done();
        });
    });

    describe("FactoryQueryset.filter()", function () {

        var FactoryQueryset = Queryset();

        it("should be successfull");
        it("should validate input argument (data)");

        it("should grow stored filter sets", function (done) {
            var queryset = new FactoryQueryset('Foo');
            // action
            queryset = queryset.filter({ title: 'foobar' });
            // assertions
            expect(queryset._filters).toBeArrayOfSize(1);
            // action
            queryset = queryset.filter({ description: 'barfoo' });
            // assertions
            expect(queryset._filters).toBeArrayOfSize(2);
            done();
        });

        it("should keep previous filter sets", function (done) {
            var queryset = new FactoryQueryset('Foo');
            // action
            var queryset1 = queryset.filter({ title: 'foobar' });
            var queryset2 = queryset1.filter({ description: 'barfoo' });
            // assertions
            expect(queryset2._filters[0].title).toBeString('foobar');
            done();
        });

        it("should not alter previous queryset in chain", function (done) {
            var queryset = new FactoryQueryset('Foo');
            // action
            var queryset1 = queryset.filter({ title: 'foobar' });
            var queryset2 = queryset1.filter({ description: 'barfoo' });
            // assertions
            expect(queryset1._filters[0].title).toBeString('foobar');
            expect(queryset1._filters[0].description).not.toBeDefined();
            done();
        });
    });

    describe("FactoryQueryset.create()", function () {

        var FactoryQueryset = Queryset();

        it("should be successfull");
        it("should validate input argument (data)");
        it("should call create() on current model storage");
        it("should return what create() gives");
    });

    describe("FactoryQueryset.update()", function () {

        var FactoryQueryset = Queryset();

        it("should be successfull");
        it("should validate input argument (data)");
        it("should call update() on current model storage");
        it("should return what update() gives");
    });

    describe("FactoryQueryset.delete()", function () {

        var FactoryQueryset = Queryset();

        it("should be successfull");
        it("should validate input argument (data)");
        it("should call delete() on current model storage");
        it("should return what delete() gives");
    });
});