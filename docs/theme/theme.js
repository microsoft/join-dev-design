(function() {
  var body = document.body;

  var themeBtns = document.querySelectorAll(".js-theme-button");
  var themeList = document.querySelector(".js-theme-list");
  var themeNames = [].map.call(themeBtns, el => el.value);

  var currentBtn = document.querySelector(".js-theme-button:disabled");
  var newBtn;

  var userTheme = localStorage.getItem("theme");

  if (userTheme && themeNames.indexOf(userTheme) != -1) {
    newBtn = document.querySelector(
      '.js-theme-button[value="' + userTheme + '"]'
    );

    changeTheme(currentBtn.value, userTheme);
    updateBtns(currentBtn, newBtn);
  } else {
    currentBtn = themeBtns[0];
  }

  themeList.addEventListener("click", function(e) {
    var themeName;

    if (e.target.nodeType === 1) {
      // Theme already active
      if (e.target.disabled) return;

      themeName = e.target.value;

      changeTheme(currentBtn.value, themeName);
      updateBtns(currentBtn, e.target);
      storeTheme(themeName);
    }
  });

  function changeTheme(oldTheme, newTheme) {
    body.classList.add("js-theme-" + newTheme);
    body.classList.remove("js-theme-" + oldTheme);
  }

  function storeTheme(themeName) {
    localStorage.setItem("theme", themeName);
  }

  function updateBtns(prevBtn, newBtn) {
    prevBtn.disabled = false;
    newBtn.disabled = true;

    currentBtn = newBtn;
  }
})();
