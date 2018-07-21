var app = app || {};

app.logLogo = function (sz) {
  var sp = 10;
  var styles = [
    "font-size: 1px",
    "display: inline-block",
    "padding-left: " + (sz * 2 + sp) + "px",
    "padding-top: " + (sz * 2 + sp) + "px",
    "background-image: linear-gradient(90deg, #F0521F 0px, #F0521F <p1>px, transparent <p1>px, transparent <p2>px, #7FCC2C <p2>px, #7FCC2C <p3>px, transparent <p3>px), linear-gradient(90deg, #00ADF0 0px, #00ADF0 <p4>px, transparent <p4>px, transparent <p5>px, #FCBA12 <p5>px, #FCBA12 <p6>px, transparent <p6>px)"
      .replace(/<p1>/g, '' + (sz))
      .replace(/<p2>/g, '' + (sz + sp))
      .replace(/<p3>/g, '' + (sz * 2 + sp))
      .replace(/<p4>/g, '' + (sz))
      .replace(/<p5>/g, '' + (sz + sp))
      .replace(/<p6>/g, '' + (sz * 2 + sp)),
    "background-repeat: no-repeat",
    "background-size: " + (sz * 2 + sp) + "px " + sz + "px",
    "background-position: 0 0, 0 " + (sz + sp) + "px"
  ]

  console.log('%c ', styles.join(';'));
  console.log('👋 Hi there! 👋\n\nIt seems you like to poke around as much as we do.\n\nhttps://github.com/Microsoft/join-dev-design')
}

fetch(
  'https://api.github.com/repos/Microsoft/join-dev-design/stats/contributors'
)
  .then(function (response) {
    if (response.status !== 200) {
      console.error(
        'Looks like there was a problem. Status Code: ' + response.status
      )
      return
    }
    response.json().then(function (data) {
      var contributors = document.getElementById('contributors')
      app.authors = data.map(each => each.author)
      contributors.innerText = data.length
    })
  })
  .catch(function (err) {
    console.error('Fetch Error :-S', err)
  })

