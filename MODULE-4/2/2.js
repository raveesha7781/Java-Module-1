const form = document.getElementById("searchForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const query = document.getElementById("query").value;

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.error(err));
});