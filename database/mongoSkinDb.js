/**
 * Implementation for mongo + mongoSkin
 */
var db;

function init() {
    var mongoSkin = require('mongoskin');
    db = mongoSkin.db('mongodb://@localhost/micro-rest-service?auto_reconnect=true');
    db.bind('contacts');
}


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
    init: init,
    contacts: contacts
};

module.exports = dataStore;
