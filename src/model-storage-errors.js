function ObjectDoesNotExist(message) {
    // Error.captureStackTrace(this);
    this.message = "Object does not exist.";
    if (typeof message !== 'undefined')
        this.message = message;
    this.name = "ObjectDoesNotExist";
}
ObjectDoesNotExist.prototype = Object.create(Error.prototype);

function MultipleObjectsReturned(message) {
    // Error.captureStackTrace(this);
    this.message = "Multiple objects found.";
    if (typeof message !== 'undefined')
        this.message = message;
    this.name = "MultipleObjectsReturned";
}
MultipleObjectsReturned.prototype = Object.create(Error.prototype);

