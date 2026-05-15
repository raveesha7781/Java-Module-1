const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent page reload

  const value = document.getElementById('query').value;

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
  const data = await response.json();

  console.log(data); // print result to console
});
