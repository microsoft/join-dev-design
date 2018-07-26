var $body = document.body;
var activeTheme = "dark";

document.querySelector(".theme").onclick = function(e) {
  $body.classList.remove("js-theme-" + activeTheme);
  activeTheme = activeTheme === "dark" ? "light" : "dark";
  $body.classList.add("js-theme-" + activeTheme);
};
