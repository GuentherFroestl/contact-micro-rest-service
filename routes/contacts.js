var express = require('express');
var router = express.Router();
var dataStore = require('../database/mongoSkinDb');
var contactStore = dataStore.contacts;

/* GET users listing. */
router.get('/contacts', function(req, res, next) {
    console.log('find contacts');
    contactStore.find(function(err,result){
        console.log('contact results: ',result);
        if (result){
            res.json(result);
        }else{
            res.send('no result for contacts');
        }
    });
  
});

router.get('/contacts/insert', function(req, res, next) {
    
    var contact = {
        firstname: req.query.firstname,
        lastname: req.query.lastname
    };
    console.log('insert contact',contact);
    contactStore.save(contact);
    res.json(contact);
    });

module.exports = router;
