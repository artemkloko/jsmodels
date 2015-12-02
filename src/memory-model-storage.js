function MemoryModelStorage(model) {

    // disable constructor
    if (this.constructor === MemoryModelStorage)
        throw new Error("Can not instantiate, this class is abstract.");

    var newModelStorage = {
        _storage: [],
        _applyQueryset: function(queryset) {

            var matches = this._storage.slice(0);

            return matches.filter(function (instance) {
                for (var f in queryset._filters) {
                    var filterSet = queryset._filters[f];
                    for (var key in filterSet) {
                        if (typeof instance[key] === 'undefined' || instance[key] !== filterSet[key]) {
                            return false;
                        }
                    }
                }
                return true;
            });
        },
        create: function (data) {

            var ids = this._storage.map(function (instance) {
                return instance.id;
            });
            data.id = ids.length === 0 ? 0 : 1 + Math.max.apply(null, ids);
            this._storage.push(data);

            return data.id;
        },
        get: function (queryset) {

            // throw if no object were dound
            matches = this._applyQueryset(queryset);
            if (matches.length === 0)
                throw new ObjectDoesNotExist();

            // throw if more than one object returned
            if (matches.length > 1)
                throw new MultipleObjectsReturned();

            return matches[0];
        },
        update: function (queryset, data) {

            matches = this._applyQueryset(queryset);

            for (var m in matches)
                for (var key in data)
                    matches[m][key] = data[key];

            return matches.length;
        },
        delete: function (queryset) {

            matches = this._applyQueryset(queryset);

            this._storage = this._storage.filter(function (instance) {
                for (var m in matches) {
                    if (matches[m].id === instance.id) {
                        return false;
                    }
                }
                return true;
            });

            return matches.length;
        }
    };

    return newModelStorage;
}