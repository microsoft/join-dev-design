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
    response.json().then(function(commits) {
      window.commits = commits;
      window.currentCommitIndex = 0;
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });

function timeTravelBack() {
  window.currentCommitIndex += 1;
  var commit = window.commits[window.currentCommitIndex]
  var spacer = "<hr>&nbsp;" + commit.commit.author.name + " - " + commit.commit.message + " <hr>";
  url = '/docs/history/' + commit.sha + ".html"
  fetch(url).then(function(response) {
    response.text().then(function(content) {
      document.getElementById("renderPreviousCommitNode").innerHTML += (spacer + content);
    });
  });
}
