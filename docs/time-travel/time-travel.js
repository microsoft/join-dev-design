const getPullRequests = () =>
  fetch("./index.json")
    .then(res => res.json())
    .then(res => res.data.repository.pullRequests.edges)
    .catch(err => console.warn(err));

window.onload = async () => {
  const $button = document.getElementById("button");
  const $display = document.getElementById("display");

  const pullRequests = await getPullRequests();
  const pullRequestIds = pullRequests.map(pr => pr.node.id);

  let currentDisplay = 0;

  $button.onclick = e => {
    currentDisplay++;
    $display.src = `./history/${pullRequestIds[0]}/docs/`;
  };
};
