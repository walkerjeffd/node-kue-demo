var shell = require('shelljs');

shell.cd('r');
shell.exec('Rscript --vanilla test.R', function(code, output) {
  console.log('---------------------');
  console.log('Exit code:', code);
  console.log('Program output:', output);
});
