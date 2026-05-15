const searchForm = document.getElementById('searchForm');
const results = document.getElementById('results');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const value = document.getElementById('query').value;

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
  const data = await response.json();

  console.log(data);

  // Clear old results
  results.innerHTML = '';

  data.forEach((tvShow) => {
    // Assignment 4: use ternary operator instead of optional chaining
    // If image exists use medium image, otherwise use placeholder
    const imgSrc = tvShow.show.image
      ? tvShow.show.image.medium
      : 'https://placehold.co/210x295?text=Not%20Found';

    const article = document.createElement('article');

    const h2 = document.createElement('h2');
    h2.textContent = tvShow.show.name;

    const a = document.createElement('a');
    a.href = tvShow.show.url;
    a.target = '_blank';
    a.textContent = tvShow.show.url;

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = tvShow.show.name;

    const summaryDiv = document.createElement('div');
    summaryDiv.innerHTML = tvShow.show.summary;

    article.appendChild(h2);
    article.appendChild(a);
    article.appendChild(img);
    article.appendChild(summaryDiv);

    results.appendChild(article);
  });
});