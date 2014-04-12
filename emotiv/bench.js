var Fussy = require('fussy');
var fussy = new Fussy();

var dataset = fussy.toolbox.shuffle(
  fussy.toolbox.dataset('data.csv', 'schema.json')
);

fussy.toolbox.bench({
  name    : 'eye state prediction from EEG',
  instance: fussy,
  training: dataset.slice(0, 13980),
  testing : dataset.slice(13980),
  compare : 'eye',
  debug   : false,
  progress: true,
  onComplete: function(stats){
    console.log(fussy.toolbox.pstats(stats));
    process.exit();
  }
});
