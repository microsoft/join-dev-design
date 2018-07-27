var $body = document.body;
var switchButton = document.getElementById("switchTheme");
var activeTheme = "dark";

document.querySelector(".theme").onclick = function(e) {
  $body.classList.remove("js-theme-" + activeTheme);
  switchButton.classList.remove(activeTheme);
  activeTheme = activeTheme === "dark" ? "light" : "dark";
  $body.classList.add("js-theme-" + activeTheme);
  switchButton.classList.add(activeTheme);
};
