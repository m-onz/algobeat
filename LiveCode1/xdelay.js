inlets = 5;
outlets = 5;

name = "xdelay";

var metroInterval = 89
var delayBeats = []
var internalMetro = 0

function bang() {
    post("bang on inlet " + inlet);
    outlet(inlet, "bang")
}

/*
function bang() {
  internalMetro++;

  if (internalMetro % 4 === 0) outlet(0, "bang", inlet)

  //outlet(0, [ parseInt(Math.random()*10), 2, 3, 4, 5, 6, 7, 8 ]);
}
*/

function msg_float(f) {
  metroInterval = parseInt(f)
}

function list() {
  delayBeats = Array.from(arguments)
    outlet(0, "list called with", Array.from(arguments));
}
