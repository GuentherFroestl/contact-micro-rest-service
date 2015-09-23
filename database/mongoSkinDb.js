/**
 * Implementation for mongo + mongoSkin
 */

var mongoSkin = require('mongoskin');
var db = mongoSkin.db('mongodb://@localhost/micro-rest-service?auto_reconnect=true');

db.bind('contacts');

var contacts = {
    find: function (callback) {
        db.contacts.findItems(callback);
    },
    save: function (contact) {
        db.contacts.save(contact, {w: 1}, function (err, result) {
            console.log('save result', result);
        }
        );
    }
};

var dataStore = {
    contacts: contacts
};

module.exports = dataStore;
