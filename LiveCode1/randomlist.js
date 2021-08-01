inlets = 1;
outlets = 1;

var upperLimit = 10

name = "randomlist";

function bang() {
  outlet(0, [
    parseInt(Math.random()*upperLimit),
    parseInt(Math.random()*upperLimit),
    parseInt(Math.random()*upperLimit),
    parseInt(Math.random()*upperLimit),
    parseInt(Math.random()*upperLimit),
    parseInt(Math.random()*upperLimit),
    parseInt(Math.random()*upperLimit),
    parseInt(Math.random()*upperLimit)
    ])
}

function msg_float(f) {
  upperLimit = parseInt(f);
  //outlet(0, "msg_float called with", f);
}
