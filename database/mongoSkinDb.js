/**
 * Implementation for mongo + mongoSkin
 */
var db;

function init() {
    var mongoSkin = require('mongoskin');
    db = mongoSkin.db('mongodb://@localhost/micro-rest-service?auto_reconnect=true');

}


var contacts = {
    find: function (collectionName,callback) {
        db.bind(collectionName);
        db[collectionName].findItems(callback);
    },
    save: function (collectionName,objectToSave,callback) {
        db.bind(collectionName);
        db[collectionName].save(objectToSave, {w: 1}, callback);
    }
};


var dataStore = {
    init: init,
    contacts: contacts
};

module.exports = dataStore;
