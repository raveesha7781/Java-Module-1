const jokeForm = document.getElementById('jokeForm');
const results = document.getElementById('results');

jokeForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const value = document.getElementById('query').value;

  const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value}`);
  const data = await response.json();

  console.log(data);

  // Clear old results
  results.innerHTML = '';

  // Print each joke as: <article><p>Joke here</p></article>
  data.result.forEach((joke) => {
    const article = document.createElement('article');

    const p = document.createElement('p');
    p.textContent = joke.value;

    article.appendChild(p);
    results.appendChild(article);
  });
});