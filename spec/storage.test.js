describe("Storage", function () {

    afterEach(function (done) {
        delete Storage._provider;
        done();
    });

    describe("Storage instantiate", function () {

        it("should not be successfull", function (done) {
            // action
            var storage = function () {
                return new Storage();
            };
            // assertions
            expect(storage).toThrow();
            done();
        });
    });

    describe("Storage.setProvider()", function () {

        it("should be successfull", function (done) {
            // action
            Storage.setProvider("whatever");
            // assertions
            expect(Storage._provider).toBeDefined();
            expect(Storage._provider).toBeString("whatever");
            done();
        });
    });

    describe("Storage.getProvider()", function () {

        it("should be successfull", function (done) {
            // context
            Storage.setProvider("whatever");
            // action
            var provider = Storage.getProvider();
            // assertions
            expect(provider).toBeDefined();
            expect(provider).toBeString("whatever");
            done();
        });

        it("should throw if called before setProvider", function (done) {
            // action
            var provider = function () {
                return Storage.getProvider();
            };
            // assertions
            expect(provider).toThrow();
            done();
        });
    });
});