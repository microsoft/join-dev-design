var sidePanel = document.getElementById("side-panel");
var sidePushableContent = document.getElementById("side-pushable-content");

document.getElementById("toggle-side-panel-open").onclick = function() {
  sidePanel.classList.add("side-panel-open");
  sidePushableContent.classList.add("side-pushable-content-open");
};

document.getElementById("side-pushable-content").onclick = function(e) {
  if (e.target.id === "toggle-side-panel-open") return;
  sidePanel.classList.remove("side-panel-open");
  sidePushableContent.classList.remove("side-pushable-content-open");
};
