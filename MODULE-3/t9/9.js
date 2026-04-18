const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const input = document.getElementById("calculation").value;
  let result;

  if (input.includes("+")) {
    const parts = input.split("+");
    result = parseInt(parts[0]) + parseInt(parts[1]);

  } else if (input.includes("-")) {
    const parts = input.split("-");
    result = parseInt(parts[0]) - parseInt(parts[1]);

  } else if (input.includes("*")) {
    const parts = input.split("*");
    result = parseInt(parts[0]) * parseInt(parts[1]);

  } else if (input.includes("/")) {
    const parts = input.split("/");
    result = parseInt(parts[0]) / parseInt(parts[1]);
  }

  document.getElementById("result").textContent = result;
});