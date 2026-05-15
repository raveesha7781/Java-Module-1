// Fetch a random Chuck Norris joke and print it to the console
const getRandomJoke = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await response.json();

  // Print only the joke (value property)
  console.log(data.value);
};

getRandomJoke();
