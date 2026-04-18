const trigger = document.getElementById("trigger");
const target = document.getElementById("target");

// Mouse over → change image
trigger.addEventListener("mouseover", function () {
  target.src = "picB.jpg";
});

// Mouse out → revert image
trigger.addEventListener("mouseout", function () {
  target.src = "picA.jpg";
});