var themeList = ['light', 'dark'];

var $body = document.body;
var $themeBtns = document.querySelectorAll('.js-theme-button');

$themeBtns.forEach(function (element, i) {
  element.onclick = function (e) {
    var selectedTheme = e.target.value;

    themeList.forEach(function (themeName) {
      if (themeName === selectedTheme) return;
      $body.classList.remove('js-theme-' + themeName);
    })

    $body.classList.add('js-theme-' + selectedTheme);
  }
});