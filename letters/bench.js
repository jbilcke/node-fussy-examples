var Fussy = require('fussy');
var fussy = new Fussy();

var dataset = fussy.toolbox.dataset('data.csv', 'schema.json');

fussy.toolbox.bench({
  name    : 'letters recognition',
  instance: fussy,
  training: dataset.slice(0, 16000),
  testing : dataset.slice(16000),
  compare : 'letter',
  debug   : false,
  progress: true,
  onComplete: function(stats){
    console.log(fussy.toolbox.pstats(stats));
    process.exit();
  }
});
