describe("Model", function () {

    // context
    var Article = Model({

    });

    describe("instantiate", function () {

        it("should be successfull", function (done) {
            // action
            var article = new Article();
            // assertions
            expect(article).toBeDefined();
            expect(article).not.toBeNull();
            done();
        });

        it('should return different instance each time', function (done) {
            // action
            var article1 = new Article();
            var article2 = new Article();
            // assertions
            expect(article1).not.toEqual(article2);
            done();
        });

        it("should throw an error if argument is not an object", function (done) {
            // action
            var article = function () {
                return new Article('new article');
            };
            // assertions
            expect(article).toThrow();
            done();
        });

        it("should set argument data as proterties", function (done) {
            // action
            var article = new Article({ title: 'new article', description: 'new article description' });
            // assertions
            expect(article.title).toBeDefined();
            expect(article.title).toBeString('new article');
            expect(article.description).toBeDefined();
            expect(article.description).toBeString('new article description');
            done();
        });
    });

    describe('save', function () {

        Storage.setProvider(MemoryStorageProvider);

        it('should set id to unsaved instance', function (done) {
            var article = new Article();
            // action
            article.save();
            // assertions
            expect(article.id).toBeDefined();
            expect(article.id).not.toBeNull();
            done();
        });

        it('should set different ids on different instances', function (done) {
            var article1 = new Article();
            var article2 = new Article();
            // action
            article1.save();
            article2.save();
            // assertions
            expect(article1.id).not.toEqual(article2.id);
            done();
        });
    });
});