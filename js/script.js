// Translations for different languages
const translations = {
    en: {
        aboutMeTitle: "About Me",
        aboutMeText: "Hello! I’m Sergio, a professional passionate about data, technology, and sharing knowledge. Explore my work through the menus above!",
        homeTitle: "Home",
        articlesTitle: "Articles",
        conferencesTitle: "Talks",
        teachingTitle: "Places where I teach",
        contactTitle: "Contact",

    },
    gl: {
        aboutMeTitle: "Sobre min",
        aboutMeText: "Ola son Sergio, un profesional dos datos, a tecnoloxía e a compartición de coñecemento. Explora o meu traballo a través dos menús de arriba!",
        homeTitle: "Portada",
        articlesTitle: "Artigos",
        conferencesTitle: "Charlas",
        teachingTitle: "Cursos onde dou clase",
        contactTitle: "Contacto",
    }
};

// Function to change the language
function changeLanguage(lang) {
    document.getElementById("about-me-title").textContent = translations[lang].aboutMeTitle;
    document.getElementById("about-me-text").textContent = translations[lang].aboutMeText;
    document.getElementById("home-tittle").textContent = translations[lang].homeTitle;
    document.getElementById("articles-tittle").textContent = translations[lang].articlesTitle;
    document.getElementById("conferences-tittle").textContent = translations[lang].conferencesTitle;
    document.getElementById("teaching-tittle").textContent = translations[lang].teachingTitle;
    document.getElementById("contact-tittle").textContent = translations[lang].contactTitle;

    // Save the selected language in localStorage
    localStorage.setItem("preferredLanguage", lang);
}

// Load the saved language on page load
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("preferredLanguage") || "en"; // Default to English
    changeLanguage(savedLang);

    // Add event listeners to the flags
    document.querySelector(".language-switcher").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent link navigation
        if (e.target.tagName === "IMG") {  // Ensure the click is on an image
            const lang = e.target.parentElement.getAttribute("data-lang");
            if (lang) {
                changeLanguage(lang);
            }
        }
    });
});

//Responsiveness in mobile
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".top-menu ul");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});

