describe("Manager", function () {

    describe("Manager instantiate", function () {

        it("should not be successfull", function (done) {
            // action
            var DefaultManager = function () {
                return new Manager();
            };
            // assertions
            expect(DefaultManager).toThrow();
            done();
        });
    });

    describe("Manager create factory", function () {

        it("should be successfull", function (done) {
            // action
            var DefaultManager = function () {
                return Manager();
            };
            // assertions
            expect(DefaultManager).not.toThrow();
            expect(DefaultManager()).toBeDefined();
            expect(DefaultManager()).not.toBeNull();
            done();
        });
    });

    describe("DefaultManager instantiate", function () {

        var DefaultManager = Manager();

        it("should be successfull", function (done) {
            // action
            var manager = function () {
                return new DefaultManager();
            };
            // assertions
            expect(manager).not.toThrow();
            expect(manager()).toBeDefined();
            expect(manager()).not.toBeNull();
            done();
        });

        it("should validate input argument (config)");
        it("add input argument (config) contents on every factory instance");
    });

    describe("DefaultManager.contributeToClass()", function () {

        var DefaultManager = Manager();
        var manager = new DefaultManager();

        it("should be successfull");
        it("should validate input argument (model)");
        it("should validate input argument (name)");
        it("should store the model");
        it("should store self on the model");
        it("should set self as default manager on the model, if it is not present");
    });

    describe("DefaultManager.getQueryset()", function () {

        var DefaultManager = Manager();
        var manager = new DefaultManager();

        it("should be successfull");
        it("should instantiate and return a queryset with model as argument");
    });

    describe("DefaultManager.all()", function () {

        var DefaultManager = Manager();
        var manager = new DefaultManager();

        it("should be successfull");
        it("should call getQueryset");
    });

    describe("DefaultManager.filter()", function () {

        var DefaultManager = Manager();
        var manager = new DefaultManager();

        it("should be successfull");
        it("should call getQueryset and filter");
        it("should validate input argument (data)");
    });

    describe("DefaultManager.craete()", function () {

        var DefaultManager = Manager();
        var manager = new DefaultManager();

        it("should be successfull");
        it("should call getQueryset and create");
        it("should validate input argument (data)");
    });

    describe("Manager.ensureDefaultManager()", function () {

        it("should be successfull");
        it("should validate input argument (model)");
    });
});