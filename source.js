const button = document.querySelector("[theme-toggle]");
const toggle = document.getElementById("themeSelector");
const toggle2 = document.getElementById("moon");
document.getElementById("moon").innerText = "Dark";
function toggleTheme() {
  if (toggle.getAttribute("href") == "style1.css") {
    toggle.setAttribute("href", "style2.css");
  } else {
    toggle.setAttribute("href", "style1.css");
  }
  if (toggle2.getAttribute("class") == "bx bxs-moon") {
    toggle2.setAttribute("class", "bx bxs-sun");
    toggle2.innerText = "Light";
  } else {
    toggle2.setAttribute("class", "bx bxs-moon");
    toggle2.innerText = "Dark";
  }
}
button.addEventListener("click", toggleTheme);
