// rename a folder of sounds sequentially
// from test.wav, random.wav, herpderp.wav to...
// eg. 1.wav, 2.wav, 3.wav

// booyackaashaaaa!!!!!!!

var fs = require('fs')

var index = 1;

fs.readdirSync(process.cwd()).forEach(function(item) {
  if (!item.includes('.wav')) return;
  fs.renameSync(item, `${index}.wav`)
  index++;
})



