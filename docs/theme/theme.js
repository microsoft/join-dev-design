var $body = document.body;
var activeTheme = "dark";

function themeChange(theme) {
  $body.classList.remove("js-theme-" + activeTheme);
  activeTheme = theme.value === "dark" ? "dark" : "light";
  $body.classList.add("js-theme-" + activeTheme);
}
