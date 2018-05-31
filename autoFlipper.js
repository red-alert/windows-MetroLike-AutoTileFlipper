function autoFlip(func) {
  setInterval(function() {
    setTimeout("randomFlip()", randomTime(2000, 1000));
  }, randomTime(500, 500));
}

function randomFlip() {
  flippers = document.getElementsByClassName("flip-container");
  fnum = Math.floor(Math.random()*flippers.length);
  flipper = flippers[fnum];
  flipper.classList.toggle("flip");
}

function randomTime(dif, shortest) { // shortest means minimum time interval, dif = Max_time - Min_time
  t = Math.floor((Math.random()*dif)+shortest);
  return t;
}

addLoadEvent(autoFlip)
