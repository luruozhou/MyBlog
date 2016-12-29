import * as Bluebird from "bluebird";
Bluebird.map = (items, handler)=> {
    var mapped = [];

    if (!items) {
        return Bluebird.resolve(mapped);
    }

    var promises = items.map((item, i) => handler(item, i));

    return Bluebird.all(promises);
};

export var  Promise=Bluebird;