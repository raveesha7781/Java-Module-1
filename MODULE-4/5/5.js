fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(data => {
        console.log(data.value);
    })
    .catch(err => console.error(err));