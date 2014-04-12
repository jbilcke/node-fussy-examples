var Fussy = require('fussy');
var fussy = new Fussy();

fussy.toolbox.bench({
  name    : 'diseased tree recognition',
  instance: fussy,
  training: fussy.toolbox.dataset('training.csv', 'schema.json'),
  testing : fussy.toolbox.dataset('testing.csv',  'schema.json'),
  compare : 'class',
  debug   : false,
  progress: true,
  onComplete: function(stats){
    console.log(fussy.toolbox.pstats(stats));
    process.exit();
  }
});
