describe("MemoryStorageProvider", function () {

    afterEach(function (done) {
        MemoryStorageProvider._storage = { };
        done();
    });

    describe("getModelStorage", function () {

        it("should be successfull", function (done) {
            // action
            var storage = MemoryStorageProvider.getModelStorage("whatever");
            // assertions
            expect(storage).toBeDefined();
            expect(storage).not.toBeNull();
            done();
        });

        it("should return same instance for same input", function (done) {
            // action
            var storage = MemoryStorageProvider.getModelStorage("whatever");
            var duplicateStorage = MemoryStorageProvider.getModelStorage("whatever");
            // assertions
            expect(storage).toEqual(duplicateStorage);
            done();
        });

        it("should return different instance for different input", function (done) {
            // action
            var fooStorage = MemoryStorageProvider.getModelStorage("foo");
            var barStorage = MemoryStorageProvider.getModelStorage("bar");
            // assertions
            expect(fooStorage).not.toEqual(barStorage);
            done();
        });
    });
});