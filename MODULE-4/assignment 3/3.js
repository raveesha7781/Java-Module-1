const searchForm = document.getElementById('searchForm');
const results = document.getElementById('results');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const value = document.getElementById('query').value;

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
  const data = await response.json();

  console.log(data);

  // Clear old results before showing new ones
  results.innerHTML = '';

  data.forEach((tvShow) => {
    // Get image using optional chaining (Assignment 3 approach)
    const imgSrc = tvShow.show.image?.medium;

    // Create article element
    const article = document.createElement('article');

    // Name in <h2>
    const h2 = document.createElement('h2');
    h2.textContent = tvShow.show.name;

    // URL in <a> with target="_blank"
    const a = document.createElement('a');
    a.href = tvShow.show.url;
    a.target = '_blank';
    a.textContent = tvShow.show.url;

    // Medium image
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = tvShow.show.name;

    // Summary in <div> (not <p>, because summary already contains <p>)
    const summaryDiv = document.createElement('div');
    summaryDiv.innerHTML = tvShow.show.summary;

    // Collect elements into article
    article.appendChild(h2);
    article.appendChild(a);
    article.appendChild(img);
    article.appendChild(summaryDiv);

    // Append article to #results
    results.appendChild(article);
  });
});