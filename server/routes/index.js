var express = require('express');
var router = express.Router();

var kue = require('kue'),
    jobs = kue.createQueue();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/job', function(req, res) {
  var num = Math.floor(Math.random()*100);
  var job = jobs.create('test', {
      title: 'test job ' + num,
      number: num
  }).save( function(err){
     if( !err ) console.log( job.id );
     res.redirect('/');
  });
  
});

module.exports = router;
