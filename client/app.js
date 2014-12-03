var kue = require('kue'),
    jobs = kue.createQueue();



kue.app.listen(3000);
