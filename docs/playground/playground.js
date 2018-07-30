function setPanelAnchorPoints() {
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
}

function initializeEditor(theme) {
  var editorContainer = document.getElementById("editor-container");

  // clean container for new editor
  if (editorContainer.innerHTML) {
    editorContainer.innerHTML = "";
  }

  require(["vs/editor/editor.main"], function() {
    var playgroundInitialCode = document.getElementById(
      "playground-initial-code"
    );
    var playgroundEditableArea = document.getElementById(
      "playground-editable-area"
    );
    var sourceCode =
      "<!-- <html> <head>...</head> -->\n<body>" +
      playgroundInitialCode.innerHTML.trim() +
      "\n<body>\n<!-- </html> -->";

    var editor = monaco.editor.create(editorContainer, {
      value: sourceCode,
      language: "html",
      theme,
      scrollBeyondLastLine: false
    });

    editor.model.onDidChangeContent(event => {
      var newSourceCode = editor.model.getValue();

      var parser = new DOMParser();
      var newSourceCodeDocument = parser.parseFromString(
        newSourceCode,
        "text/html"
      );

      // only update code inside playground-editable-area
      var newEditableArea = newSourceCodeDocument.getElementById(
        "playground-editable-area"
      );
      playgroundEditableArea.innerHTML = newEditableArea.innerHTML;

      // we need to reset the anchor points again after setting a new inner html
      setPanelAnchorPoints();
    });
  });
}

setPanelAnchorPoints(); // set initial anchor points
initializeEditor("vs-dark"); // vs-dark is the default theme
