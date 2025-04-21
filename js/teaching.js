// Translations for different languages
const translations = {
    en: {
        homeTitle: "Home",
        articlesTitle: "Articles",
        conferencesTitle: "Talks",
        teachingTitle: "Places where I teach",
        contactTitle: "Contact"
    },
    gl: {
        homeTitle: "Portada",
        articlesTitle: "Artigos",
        conferencesTitle: "Charlas",
        teachingTitle: "Cursos onde dou clase",
        contactTitle: "Contacto"
    }
};

// Function to change the language
function changeLanguage(lang) {
    document.getElementById("home-title").textContent = translations[lang].homeTitle;
    document.getElementById("articles-title").textContent = translations[lang].articlesTitle;
    document.getElementById("conferences-title").textContent = translations[lang].conferencesTitle;
    document.getElementById("teaching-title").textContent = translations[lang].teachingTitle;
    document.getElementById("contact-title").textContent = translations[lang].contactTitle;

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
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.top-menu ul').classList.toggle('show');
});

