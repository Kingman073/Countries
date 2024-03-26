let elDarkMode = document.querySelector(".site-header-theme-toggler");

elDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.removeItem("darkMode");
    }
});

if (localStorage.getItem("darkMode") === "dark") {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.removeItem("darkMode");
    }
}
