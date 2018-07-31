fetch('https://api.github.com/repos/Microsoft/join-dev-design/stats/contributors')
    .then(response => {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        return response.json();
    })
    .then(data => document.getElementById('contributors').innerText = data.length)
    .catch(err => console.log('Fetch Error :-S', err));
