// Shared i18n + navigation for all pages.
// Elements opt in to translation with data-i18n="<key>".
const translations = {
    en: {
        homeTitle: "Home",
        articlesTitle: "Articles",
        conferencesTitle: "Talks",
        teachingTitle: "Places where I teach",
        contactTitle: "Contact",
        aboutMeTitle: "About Me",
        aboutMeText: "Hello! I’m Sergio, a professional passionate about data, technology, and sharing knowledge. Explore my work through the menus above!",
        articlesHeading: "Articles",
        conferencesHeading: "Talks",
        teachingHeading: "Places where I teach",
        contactHeading: "Contact",
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
        aboutMeTitle: "Sobre min",
        aboutMeText: "Ola son Sergio, un profesional dos datos, a tecnoloxía e a compartición de coñecemento. Explora o meu traballo a través dos menús de arriba!",
        articlesHeading: "Artigos",
        conferencesHeading: "Charlas",
        teachingHeading: "Cursos onde dou clase",
        contactHeading: "Contacto",
        conferencesPodcast: "Episodio de Podcast",
        conferencesGable: "Conferencia Gable",
        conferencesCodely: "Conferencia Codely",
        conferencesDama: "Conferencia DAMA"
    }
};

function changeLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        const value = dict[el.dataset.i18n];
        if (value !== undefined) {
            el.textContent = value;
        }
    });

    localStorage.setItem("preferredLanguage", lang);
    document.documentElement.lang = lang;

    // Reflect active language on the switcher buttons.
    document.querySelectorAll(".language-switcher button").forEach(function (btn) {
        btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
}

document.addEventListener("DOMContentLoaded", function () {
    changeLanguage(localStorage.getItem("preferredLanguage") || "en");

    // Language switcher
    const switcher = document.querySelector(".language-switcher");
    if (switcher) {
        switcher.addEventListener("click", function (e) {
            const btn = e.target.closest("button[data-lang]");
            if (btn) {
                changeLanguage(btn.dataset.lang);
            }
        });
    }

    // Mark the current page in the nav.
    const here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".top-menu ul li a").forEach(function (a) {
        if ((a.getAttribute("href").split("/").pop() || "index.html") === here) {
            a.setAttribute("aria-current", "page");
        }
    });

    // Hamburger menu
    const menuToggle = document.querySelector(".menu-toggle");
    const menuList = document.querySelector(".top-menu ul");
    if (menuToggle && menuList) {
        menuToggle.addEventListener("click", function () {
            const isOpen = menuList.classList.toggle("show");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });
        // Auto-close after tapping a link.
        menuList.addEventListener("click", function (e) {
            if (e.target.closest("a")) {
                menuList.classList.remove("show");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }
});
