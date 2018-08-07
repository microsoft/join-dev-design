var theme = {
  activeTheme: "dark",
  load: function(theme, cb) {
    var id = "theme-" + theme;
    if (!document.getElementById(id)) {
      var $head = document.getElementsByTagName("head")[0];
      var $link = document.createElement("link");
      $link.id = id;
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = "/theme/" + theme + "/theme.css";
      $head.appendChild($link);

      $link.onload = function() {
        if (!!cb) cb();
      };
      $link.onerror = function() {
        console.warn("loading " + theme + " theme failed.");
      };
    }
  },
  changeTo: function(theme) {
    if (["light", "dark"].indexOf(theme) === -1) this.load(theme);

    document.body.classList.remove("js-theme-" + this.activeTheme);
    this.activeTheme = theme;
    document.body.classList.add("js-theme-" + this.activeTheme);
  }
};

document.querySelector(".theme").onclick = function(e) {
  var nextTheme = theme.activeTheme === "dark" ? "light" : "dark";
  theme.changeTo(nextTheme);
};
