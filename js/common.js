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
        conferencesDama: "DAMA Conference",
        articleDate1: "November 2024",
        articleDate2: "April 2024",
        articleDate3: "April 2024",
        articleCoauthor3: "Co-authored with Marta Diaz",
        conferencesPodcastDate: "February 2026",
        conferencesPodcastDesc: "Podcast episode about data engineering",
        conferencesGableDate: "March 2025",
        conferencesGableDesc: "Implementation of data contracts in Adevinta in Spain",
        conferencesCodelyDate: "January 2025",
        conferencesCodelyDesc: "Building a self-serving data platform – talk at Codely TV.",
        conferencesDamaDate: "December 2023",
        conferencesDamaDesc: "Transitioning from local scripts to data products in Adevinta Spain.",
        teachingSubject1: "Final Project Tutor",
        teachingSubject2: "Data processing with Databricks",
        teachingSubject3: "Machine Learning with Spark",
        teachingSubject4: "MLOps",
        teachingSubject5: "Spark"
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
        conferencesDama: "Conferencia DAMA",
        articleDate1: "Novembro 2024",
        articleDate2: "Abril 2024",
        articleDate3: "Abril 2024",
        articleCoauthor3: "Coescrito con Marta Diaz",
        conferencesPodcastDate: "Febreiro 2026",
        conferencesPodcastDesc: "Episodio de podcast sobre enxeñaría de datos",
        conferencesGableDate: "Marzo 2025",
        conferencesGableDesc: "Implementación de contratos de datos en Adevinta en España",
        conferencesCodelyDate: "Xaneiro 2025",
        conferencesCodelyDesc: "Construíndo unha plataforma de datos self-service – charla en Codely TV.",
        conferencesDamaDate: "Decembro 2023",
        conferencesDamaDesc: "Transición de scripts locais a produtos de datos en Adevinta España.",
        teachingSubject1: "Titor de Proxecto Final",
        teachingSubject2: "Procesamento de datos con Databricks",
        teachingSubject3: "Aprendizaxe Automática con Spark",
        teachingSubject4: "MLOps",
        teachingSubject5: "Spark"
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
