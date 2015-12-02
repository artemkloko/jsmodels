// Model is function that creates new model instance factory
// also some model config properties are stored on the factory
function Model(config) {

    var newModel = function (data) {

        // if data is given, but is not a dict, throw an error
        if (typeof data !== 'undefined' && typeof data !== 'object')
            throw new Error("Can not create instance from " + typeof data + ", please provide an object or nothing.");

        // create an object that will be used as instance
        var newInstance = {
            save: function() {
                // TODO find another way to mark that an instance in already in the storage
                if (this.id)
                    newModel._baseManager.filter({ id: this.id }).update(this);
                else
                    this.id = newModel._baseManager.create(this);
            },
            delete: function () {
                newModel._baseManager.filter({ id: this.id }).delete();
            }
        };

        // set data as instance properties
        for (var prop in data)
            newInstance[prop] = data[prop];

        return newInstance;
    };

    // add all class properties passed through config to the model
    for (var prop in config)
        newModel[prop] = addToClass(prop, config[prop]);

    // if the property is object and has contributeToClass
    // contributeToClass handles the adding method
    newModel.addToClass = function (name, value) {
        if (typeof value.contributeToClass !== 'undefined')
            value.contributeToClass(newModel, name);
        else
            newModel.prop = value;
    };

    Manager.ensureDefaultManager(newModel);

    return newModel;
}