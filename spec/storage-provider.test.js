describe("StorageProvider", function () {

    describe("StorageProvider instantiate", function () {

        it("should not be successfull", function (done) {
            // action
            var storageProvider = function () {
                return new StorageProvider({
                    getModelStorage: function () { }
                });
            };
            // assertions
            expect(storageProvider).toThrow();
            done();
        });
    });

    describe("StorageProvider as function", function () {

        it("should be successfull", function (done) {
            // action
            var storageProvider = StorageProvider({
                getModelStorage: function () { }
            });
            // assertions
            expect(storageProvider).toBeDefined();
            expect(storageProvider).not.toBeNull();
            done();
        });

        it("should throw if called without argument", function (done) {
            // action
            var storageProvider = function () {
                return StorageProvider();
            };
            // assertions
            expect(storageProvider).toThrow();
            done();
        });

        it("should throw if argument does not have getModelStorage()", function (done) {
            // action
            var storageProvider = function () {
                return StorageProvider({ foo: "bar" });
            };
            // assertions
            expect(storageProvider).toThrow();
            done();
        });

        it("should throw if argument getModelStorage is not a function", function (done) {
            // action
            var storageProvider = function () {
                return StorageProvider({ getModelStorage: { } });
            };
            // assertions
            expect(storageProvider).toThrow();
            done();
        });
    });
});