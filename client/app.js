var kue = require('kue'),
    jobs = kue.createQueue();
var shell = require('shelljs');

jobs.process('test', function(job, done){
  console.log('Processing test job ' + job.id);
  console.log(job.data);
  shell.exec('Rscript r/test.R', {async: true, silent: true}, function(code, output) {
    if (code===0) {
      done();
    } else {
      done('Rscript failed\n'+output);
    }
  });
});

kue.app.listen(3000);
