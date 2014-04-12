var Fussy = require('fussy');
var fussy = new Fussy();

fussy.toolbox.bench({
  name    : 'rocks or mines?',
  instance: fussy,
  training: fussy.toolbox.dataset('training.csv', 'schema.json'),
  testing : fussy.toolbox.dataset('testing.csv',  'schema.json'),
  compare : 'type',
  debug   : false,
  progress: true,
  onComplete: function(stats){
    console.log(fussy.toolbox.pstats(stats));
    process.exit();
  }
});
