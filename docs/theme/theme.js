var $body = document.body;
var $themeSwitch = document.querySelector(".theme-switch__button");
var $themeSwitchInfo = document.querySelector(".theme-switch__info");
var themeSwitchStatus = false;

$themeSwitch.onclick = function (e) {
  var isActive = themeSwitchStatus === true;
  if (!isActive) {
    themeSwitchStatus = true;
    this.setAttribute("aria-pressed", themeSwitchStatus);
    $themeSwitchInfo.innerHTML = 'on'
    $body.classList.add("js-theme-light");
  } else {
    themeSwitchStatus = false;
    this.setAttribute("aria-pressed", themeSwitchStatus);
    $themeSwitchInfo.innerHTML = 'off'
    $body.classList.remove("js-theme-light");
  }
}
