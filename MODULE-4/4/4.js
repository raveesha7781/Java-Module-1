const form = document.getElementById("searchForm");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const query = document.getElementById("query").value;

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(res => res.json())
        .then(data => {

            resultsDiv.innerHTML = "";

            data.forEach(tvShow => {

                const show = tvShow.show;

                const article = document.createElement("article");

                const title = document.createElement("h2");
                title.textContent = show.name;

                const link = document.createElement("a");
                link.href = show.url;
                link.target = "_blank";
                link.textContent = "View Details";

                const img = document.createElement("img");

img.src = show.image
    ? show.image.medium
    : "https://placehold.co/210x295?text=Not%20Found";

img.alt = show.name;

                const summary = document.createElement("div");
                summary.innerHTML = show.summary;

                article.appendChild(title);
                article.appendChild(link);
                article.appendChild(img);
                article.appendChild(summary);

                resultsDiv.appendChild(article);
            });

        })
        .catch(err => console.error(err));
});