const form = document.getElementById("searchForm");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const query = document.getElementById("query").value;

    fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
        .then(res => res.json())
        .then(data => {

            resultsDiv.innerHTML = "";

            data.result.forEach(joke => {

                const article = document.createElement("article");

                const p = document.createElement("p");
                p.textContent = joke.value;

                article.appendChild(p);
                resultsDiv.appendChild(article);
            });

        })
        .catch(err => console.error(err));
});