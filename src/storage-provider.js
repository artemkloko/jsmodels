function StorageProvider(config) {

    // disable constructor
    if (this.constructor === StorageProvider)
        throw new Error("Can not instantiate, this class is abstract.");

    // check that config exists and has getModelStorage
    if (typeof config === 'undefined' || typeof config.getModelStorage === 'undefined')
        throw new Error("Can not create StorageProvider, this functions requires an object with getModelStorage() argument.");

    // check config.getModelStorage is a function
    var getType = {};
    if (getType.toString.call(config.getModelStorage) !== '[object Function]')
        throw new Error("Can not create StorageProvider, this functions requires getModelStorage to be a function.");

    var newStorageProvider = function () { };

    // set whatever is in config as properties
    for (var prop in config)
        newStorageProvider[prop] = config[prop];

    return newStorageProvider;
}