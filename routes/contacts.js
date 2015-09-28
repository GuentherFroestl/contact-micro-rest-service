var express = require('express');
var router = express.Router();
var dataStore = require('../database/mongoSkinDb');
dataStore.init();
var contactStore = dataStore.contacts;

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('find contacts');
    contactStore.find(req.collectionName,function(err,result){
        if (err){
            return next(err);
        }
        console.log('contact results: ',result);
        if (result){
            res.json(result);
        }else{
            res.send('no result for contacts');
        }
    });
  
});

router.post('/', function(req, res, next) {

    var contact = req.body;
    console.log('insert contact',contact);
    contactStore.save(req.collectionName,contact,function(err,result){
        if (err){
            return next(err);
        }
        console.log('contact results: ',result);
        if (result){
            res.json(result);
        }else{
            res.send('no result for insert');
        }
    });
});

module.exports = router;
