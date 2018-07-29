var sidePushableContent = document.getElementById("side-pushable-content");

document.getElementById("toggle-side-panel-open").onclick = function() {
  sidePushableContent.classList.add("side-pushable-content-open");
};

document.getElementById("side-pushable-content").onclick = function(e) {
  if (e.target.id === "toggle-side-panel-open") return;
  sidePushableContent.classList.remove("side-pushable-content-open");
};
