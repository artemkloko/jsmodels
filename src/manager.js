// Manager is function that creates new queryset factory
function Manager(config) {

    // disable constructor
    if (this.constructor === Manager)
        throw new Error("Can not instantiate, this class is abstract.");

    var newManager = function () {

        // create an object that will be used as instance
        var newInstance = {
            // define model instance functions
            contributeToClass: function (model, name) {
                this._model = model.constructor.toString();
                model[name] = this;
                if (typeof model._defaultManager === 'undefined')
                    model._defaultManager = this;
            },
            getQueryset: function () {
                var defaultQueryset = Queryset();
                return new defaultQueryset(this._model);
            },
            all: function() {
                return this.getQueryset();
            },
            filter: function (data) {
                return this.getQueryset().filter(data);
            },
            create: function (data) {
                return this.getQueryset().create(data);
            }
        };
        return newInstance;
    };
    return newManager;
}

// this is called from Model before returning a new instance factory
Manager.ensureDefaultManager = function (model) {

    if (typeof model._defaultManager === 'undefined') {
        // if model already has and objects value
        // throw that model must specify a custom manager
        var defaultManager = Manager();
        model.addToClass('objects', new defaultManager());
        model._baseManager = model.objects;
    } else if (typeof model._baseManager === 'undefined') {
        model._baseManager = model._defaultManager;
    }
};