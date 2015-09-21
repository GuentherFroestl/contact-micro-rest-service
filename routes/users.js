var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
    console.log(req);
  res.send('response from user resource');
});

module.exports = router;
