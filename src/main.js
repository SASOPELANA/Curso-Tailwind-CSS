// Uso de Doom

const darkModeInput = document.querySelector("#darkmode");

darkModeInput.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
