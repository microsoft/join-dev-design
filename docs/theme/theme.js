var $body = document.getElementById("theme-background");
var activeTheme = "dark";

document.querySelector(".theme").onclick = function(e) {
  $body.classList.remove("js-theme-" + activeTheme);
  activeTheme = activeTheme === "dark" ? "light" : "dark";
  $body.classList.add("js-theme-" + activeTheme);
  var monacoThemes = {
    dark: "vs-dark",
    light: "vs-light"
  };
  initializeEditor(monacoThemes[activeTheme]);
};
