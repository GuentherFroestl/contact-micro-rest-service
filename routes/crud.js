/**
 * General purpose CRUD operation for MongoDB collections.
 * usage:
 * REST Operation (GET | POST | PUT | DELETE) on this URL pattern:
 * /:collectionName
 * /:collectionName/:objectId   (for getById, deleteById
 *
 * @type {*|exports|module.exports}
 */
var express = require('express');
var crudRouter = express.Router();
var dataStore = require('../database/mongoSkinDb');
dataStore.init();
var crudOp = dataStore.crudOperations;

/** GET object listing.
* /:collectionName
*/
crudRouter.get('/', function(req, res, next) {
    console.log('find ',req.collectionName);
    crudOp.find(req.collectionName,function(err,result){
        if (err){
            return next(err);
        }
        console.log('contact results: ',result);
        if (result){
            res.json(result);
        }else{
            res.send('no result for crudOperations');
        }
    });
  
});
/**
 * GET object by id
 * /:collectionName/:objectId
 */
crudRouter.get('/:id', function(req, res, next) {
    console.log('findById ',req.collectionName,req.params.id);
    crudOp.findById(req.collectionName,req.params.id,function(err,result){
        if (err){
            return next(err);
        }
        console.log('contact results: ',result);
        if (result){
            res.json(result);
        }else{
            res.send('no result for crudOperations');
        }
    });
});
/**
 * DELETE object by id
 * /:collectionName/:objectId
 */
crudRouter.delete('/:id', function(req, res, next) {
    console.log('deleteById ',req.collectionName,req.params.id);
    crudOp.deleteById(req.collectionName,req.params.id,function(err,result){
        if (err){
            return next(err);
        }
        console.log('contact results: ',result);
        if (result){
            res.json(result);
        }else{
            res.send('no result for crudOperations');
        }
    });

});
/**
 * POST create object
 * /:collectionName
 * request.body = object
 */
crudRouter.post('/', function(req, res, next) {
    var object = req.body;
    console.log('insert object into ',req.collectionName,object);
    crudOp.save(req.collectionName,object,function(err,result){
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

/**
 * PUT update object
 * /:collectionName
 * request.body = object
 */
crudRouter.put('/', function(req, res, next) {
    var object = req.body;
    console.log('update object into ',req.collectionName,object);
    crudOp.update(req.collectionName,object,function(err,result){
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

module.exports = crudRouter;
