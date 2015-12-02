function Storage() {
    throw new Error("Can not instantiate, this class is abstract.");
}

Storage.setProvider = function (provider) {
    this._provider = provider;
};

Storage.getProvider = function () {

    // check that provider is set before trying to get
    if (typeof this._provider === 'undefined')
        throw new Error("Can not getProvider before setProvider.");

    return this._provider;
};