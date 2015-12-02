describe("MemoryModelStorage", function () {

    describe("MemoryModelStorage instantiate", function () {

        it("should not be successfull", function (done) {
            // action
            var storage = function () {
                return new MemoryModelStorage('foo');
            };
            // assertions
            expect(storage).toThrow();
            done();
        });
    });

    describe("MemoryModelStorage._applyQueryset()", function () {

        // context
        var storage = MemoryModelStorage('foo');
        var newQueryset = Queryset();
        var queryset = new newQueryset('foo');

        afterEach(function (done) {
            storage._storage = [];
            done();
        });

        it("should be successfull", function (done) {
            // context
            storage.create({ title: "foo" });
            storage.create({ title: "bar", description: "desc" });
            storage.create({ title: "foobar", description: "desc" });
            // action
            var matches1 = storage._applyQueryset(queryset.filter({ title: "foo" }));
            var matches2 = storage._applyQueryset(queryset.filter({ description: "desc" }));
            var matches3 = storage._applyQueryset(queryset.filter({ title: "non existent" }));
            // assertions
            expect(matches1).toBeArrayOfSize(1);
            expect(matches2).toBeArrayOfSize(2);
            expect(matches3).toBeArrayOfSize(0);
            done();
        });
    });

    describe("MemoryModelStorage.create()", function () {

        // context
        var storage = MemoryModelStorage('foo');

        afterEach(function (done) {
            storage._storage = [];
            done();
        });

        it("should be successfull", function (done) {
            // action
            var id = function () {
                return storage.create({ });
            };
            // assertions
            expect(id).not.toThrow();
            done();
        });

        it("should return an id", function (done) {
            // action
            var id = storage.create({ });
            // assertions
            expect(id).toBeDefined();
            expect(id).not.toBeNull();
            expect(id).toBeNumber();
            done();
        });

        it("should return every time different id", function (done) {
            // action
            var id1 = storage.create({ });
            var id2 = storage.create({ });
            var id3 = storage.create({ });
            // assertions
            expect(id1).not.toEqual(id2);
            expect(id1).not.toBeNull(id3);
            expect(id2).toBeNumber(id3);
            done();
        });

        it("should grow the storage", function (done) {
            // action
            storage.create({ });
            storage.create({ });
            // assertions
            expect(storage._storage).toBeArrayOfSize(2);
            // action
            storage.create({ });
            // assertions
            expect(storage._storage).toBeArrayOfSize(3);
            done();
        });

        it("should store the same id as the returned value", function (done) {
            // action
            var id = storage.create({ });
            // assertions
            expect(storage._storage).toBeArrayOfSize(1);
            expect(storage._storage[0]).toBeObject();
            expect(storage._storage[0].id).toBeDefined();
            expect(storage._storage[0].id).not.toBeNull();
            expect(storage._storage[0].id).toBeNumber(id);
            done();
        });

        it("should store the data", function (done) {
            // action
            storage.create({ title: 'foobar' });
            // assertions
            expect(storage._storage).toBeArrayOfSize(1);
            expect(storage._storage[0]).toBeObject();
            expect(storage._storage[0].title).toBeDefined();
            expect(storage._storage[0].title).not.toBeNull();
            expect(storage._storage[0].title).toBeString('foobar');
            done();
        });

        it("should validate input argument (data)");
    });

    describe("MemoryModelStorage.get()", function () {
        it("should be successfull");
        it("should throw if no objects were found");
        it("should throw if more than one object were found");
        it("should validate input argument (queryset)");
    });

    describe("MemoryModelStorage.update()", function () {

        // context
        var storage = MemoryModelStorage('foo');
        var newQueryset = Queryset();
        var queryset = new newQueryset('foo');

        afterEach(function (done) {
            storage._storage = [];
            done();
        });

        it("should be successfull", function (done) {
            storage.create({ title: 'instance' });
            // action
            var update = function () {
                return storage.update(queryset, { title: "updated instance" });
            };
            // assertions
            expect(update).not.toThrow();
            done();
        });

        it("should not grow the storage", function (done) {
            storage.create({ title: 'first instance' });
            // action
            storage.update(queryset, { title: "updated instance" });
            // assertions
            expect(storage._storage).toBeArrayOfSize(1);
            done();
        });

        it("should alter the correct entry in storage", function (done) {
            storage.create({ title: 'first instance' });
            storage.create({ title: 'second instance' });
            storage.create({ title: 'third instance' });
            // action
            storage.update(queryset.filter({ id: 2 }), { title: "second updated instance" });
            // assertions
            var firstInstance = storage.get(queryset.filter({ id: 0 }));
            var secondInstance = storage.get(queryset.filter({ id: 1 }));
            var thirdInstance = storage.get(queryset.filter({ id: 2 }));
            expect(firstInstance.title).toBeString("first instance");
            expect(secondInstance.title).toBeString("second updated instance");
            expect(thirdInstance.title).toBeString("third instance");
            done();
        });

        it("should return the number of altered instances");
        it("should validate input argument (queryset)");
        it("should validate input argument (data)");
    });

    describe("MemoryModelStorage.delete()", function () {
        it("should be successfull");
        it("should delete same count of objects as _applyQueryset would return");
        it("should return the number of altered instances");
        it("should validate input argument (queryset)");
    });
});