const el = document.getElementById("active-button");

el.addEventListener("click", () => {
  if (el.textContent === "Oddity") {
    el.textContent = "Мені пощастить";
    el.style.backgroundColor = "#f5f5f5";
    el.style.color = "#000";
  } else {
    el.textContent = "Oddity";
    el.style.backgroundColor = "rgb(4, 4, 178)";
    el.style.color = "#ffff";
  }
});
