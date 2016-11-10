var session = require('express-session');

var maxAge = 2*60* 1000;
var ttl = maxAge / 1000;
var fileStoreOptions = {ttl: ttl};

var SessionFileStore = require('session-file-store')(session);

var sessionStore = new SessionFileStore(fileStoreOptions);

var defaultSessionOptions = {
    name: 'connect.haha.sid',
    secret: 'session-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
};


var sessionForX = session(extend({
    store: sessionStore,
    cookie: {
        domain: '.xianyirenX.com',
        maxAge: maxAge
    }
}, defaultSessionOptions));

exports.sessionMiddleware = sessionForX;


function extend(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !(typeof add === 'object' && add !== null)) return origin;

    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
        origin[keys[i]] = add[keys[i]];
    }
    return origin;
}