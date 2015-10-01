/**
 * Implementation for mongo + mongoSkin
 */
var db;

function init() {
    var mongoSkin = require('mongoskin');
    db = mongoSkin.db('mongodb://@localhost/micro-rest-service?auto_reconnect=true');

}


var crudOperations = {
    find: function (collectionName,callback) {
        db.bind(collectionName);
        db[collectionName].findItems(callback);
    },
    findById: function (collectionName,id,callback) {
        db.bind(collectionName);
        db[collectionName].findById(id,callback);
    },
    save: function (collectionName,objectToSave,callback) {
        db.bind(collectionName);
        db[collectionName].save(objectToSave, {w: 1}, callback);
    },
    update: function (collectionName,objectToSave,callback) {
        db.bind(collectionName);
        db[collectionName].updateById(objectToSave._id,objectToSave, callback);
    },
    deleteById: function (collectionName,id,callback) {
        db.bind(collectionName);
        db[collectionName].removeById(id, callback);
    }
};


var dataStore = {
    init: init,
    crudOperations: crudOperations
};

module.exports = dataStore;
