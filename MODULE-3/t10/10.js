const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop form refresh

  const firstName = document.querySelector('input[name="firstname"]').value;
  const lastName = document.querySelector('input[name="lastname"]').value;

  const target = document.getElementById("target");
  target.textContent = `Your name is ${firstName} ${lastName}`;
});