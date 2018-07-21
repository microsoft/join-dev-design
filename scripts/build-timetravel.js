const fetch = require("node-fetch");
var fs = require("fs");

var commits = [];
var currentCommitIndex = 0;

fetch(
  "https://api.github.com/repos/Microsoft/join-dev-design/commits?path=/docs/index.html"
)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }
    response.json().then(function(commitsReceived) {
      commits = commitsReceived;

      downloadFileForCommits();
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });

function downloadFileForCommits() {
  commits.forEach(function(commit) {
    var urlOfIndexHTML =
      "https://raw.githubusercontent.com/Microsoft/join-dev-design/" +
      commit.sha +
      "/docs/index.html";
    var indexHTMLFileName = "docs/history/" + commit.sha + ".html";

    downloadAndSave(urlOfIndexHTML, indexHTMLFileName, commit.sha);

    var urlOfStyleCSS =
      "https://raw.githubusercontent.com/Microsoft/join-dev-design/" +
      commit.sha +
      "/docs/css/style.css";
    var styleCSSFileName = "docs/history/" + commit.sha + ".css";

    downloadAndSave(urlOfStyleCSS, styleCSSFileName, commit.sha);
  });
}

function downloadAndSave(url, fileName, sha) {
  fetch(url).then(function(response) {
    response.text().then(function(content) {
      if (fileName.indexOf(".html")) {
        content = content.replace("css/style.css", "/history/" + sha + ".css");
      }

      fs.writeFile(fileName, content, function(err) {
        if (err) {
          return console.log(err);
        }
        // File Saved
      });
    });
  });
}

console.log("Time Travel Built");
