inlets = 1;
outlets = 1;

name = "xdel";

var metroInterval = 89
var delayBeats = []
var internalMetro = 0

function bang() {
  internalMetro++;
  shouldBang = false;
  delayBeats.forEach(function (del) {
    if (internalMetro % del === 0) shouldBang = true;
  })
  if (shouldBang) outlet(0, "bang")
}

function msg_float(f) {
  metroInterval = parseInt(f)
}

function list() {
  delayBeats = Array.from(arguments)
}
