const css = `text-align: center; font-size: 1.25em;
`;

console.log(
  "%c👋 Hi there! 👋\n\nIt seems you like to poke around as much as we do.\nhttps://github.com/Microsoft/join-dev-design",
  css
);

fetch(
  "https://api.github.com/repos/Microsoft/join-dev-design/stats/contributors"
)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }
    response.json().then(function(data) {
      var contributors = document.getElementById("contributors");
      contributors.innerText = data.length;
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
