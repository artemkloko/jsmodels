// Queryset is function that creates
// new queryset factory for a specific model
function Queryset(config) {

    // disable constructor
    if (this.constructor === Queryset)
        throw new Error("Can not instantiate, this class is abstract.");

    var newQueryset = function (model) {

        // create an object that will be used as instance
        var newInstance = {
            // define model instance functions
            filter: function (data) {
                var queryset = new newQueryset(model);
                queryset._filters = queryset._filters.concat(this._filters, [data]);
                return queryset;
            },
            create: function (data) {
                return Storage.getProvider().getModelStorage(this._model).create(data);
            },
            update: function (data) {
                return Storage.getProvider().getModelStorage(this._model).update(this, data);
            },
            delete: function () {
                return Storage.getProvider().getModelStorage(this._model).delete(this);
            }
        };
        newInstance._model = model;
        newInstance._filters = [];
        // // set config as instance properties
        // for (var prop in config)
        //     newInstance[prop] = config[prop];

        return newInstance;
    };
    return newQueryset;
}