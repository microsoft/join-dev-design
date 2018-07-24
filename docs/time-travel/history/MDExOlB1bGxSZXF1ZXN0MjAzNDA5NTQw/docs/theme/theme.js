var $body = document.body;
var $themeBtns = document.querySelectorAll(".js-theme-button");

$themeBtns[0].setAttribute("disabled", "disabled");

$themeBtns.forEach(function(ele) {
  ele.onclick = function(e) {
    var selectedName = e.target.value;

    $themeBtns.forEach(function(ele) {
      var themeName = ele.value;
      if (themeName === selectedName) return;
      $body.classList.remove("js-theme-" + themeName);
      ele.removeAttribute("disabled");
    });

    $body.classList.add("js-theme-" + selectedName);
    ele.setAttribute("disabled", "disabled");
  };
});
