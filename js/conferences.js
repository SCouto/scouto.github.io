// Translations for different languages
const translations = {
    en: {
        homeTitle: "Home",
        articlesTitle: "Articles",
        conferencesTitle: "Talks",
        teachingTitle: "Places where I teach",
        contactTitle: "Contact",
        conferencesPodcast: "Podcast Episode",
        conferencesGable: "Gable Conference",
        conferencesCodely: "Codely Conference",
        conferencesDama: "DAMA Conference"
    },
    gl: {
        homeTitle: "Portada",
        articlesTitle: "Artigos",
        conferencesTitle: "Charlas",
        teachingTitle: "Cursos onde dou clase",
        contactTitle: "Contacto",
        conferencesPodcast: "Episodio de Podcast",
        conferencesGable: "Conferencia Gable",
        conferencesCodely: "Conferencia Codely",
        conferencesDama: "Conferencia DAMA"
    }
};

// Function to change the language
function changeLanguage(lang) {
    document.getElementById("home-title").textContent = translations[lang].homeTitle;
    document.getElementById("articles-title").textContent = translations[lang].articlesTitle;
    document.getElementById("conferences-title").textContent = translations[lang].conferencesTitle;
    document.getElementById("teaching-title").textContent = translations[lang].teachingTitle;
    document.getElementById("contact-title").textContent = translations[lang].contactTitle;
    document.getElementById("conferences-podcast").textContent = translations[lang].conferencesPodcast;
    document.getElementById("conferences-gable").textContent = translations[lang].conferencesGable;
    document.getElementById("conferences-codely").textContent = translations[lang].conferencesCodely;
    document.getElementById("conferences-dama").textContent = translations[lang].conferencesDama;

    // Save the selected language in localStorage
    localStorage.setItem("preferredLanguage", lang);

    // Keep the html lang attribute in sync for accessibility
    document.documentElement.lang = lang;
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


const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.top-menu ul');
menuToggle.addEventListener('click', function() {
    const isOpen = menuList.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', isOpen);
});

