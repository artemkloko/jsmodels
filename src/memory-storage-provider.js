var MemoryStorageProvider = StorageProvider({
    storage: { },
    getModelStorage: function(model) {

        // if not in storage, instantiate a model storage
        if (Object.keys(this.storage).indexOf(model) === -1)
            this.storage[model] = MemoryModelStorage(model);

        return this.storage[model];
    }
});