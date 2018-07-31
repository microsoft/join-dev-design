var $body = document.body;
var activeTheme = "dark";
var mstiles = [
  "logo-tile--red",
  "logo-tile--green",
  "logo-tile--blue",
  "logo-tile--yellow"
];
var next = 0;

document.querySelector(".theme").onclick = function(e) {
  $body.classList.remove("js-theme-" + activeTheme);
  activeTheme = activeTheme === "dark" ? "light" : "dark";
  $body.classList.add("js-theme-" + activeTheme);
};

function clearClass(x) {
  setTimeout(function() {
    x.remove("spin");
  }, 1200);
}

document.onclick = function(e) {
  var el = document.getElementsByClassName(mstiles[next]);
  var elClasses = el[0].classList;
  elClasses.add("spin");
  clearClass(elClasses);
  next++;
  if (next >= 4) {
    next = 0;
  }
};
