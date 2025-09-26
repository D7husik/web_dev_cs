const btn = document.getElementById("toggleTheme");

btn.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.body.removeAttribute("data-theme");
    btn.textContent = " Dark Mode";
  } else {
    document.body.setAttribute("data-theme", "dark");
    btn.textContent = " Light Mode";
  }
});
