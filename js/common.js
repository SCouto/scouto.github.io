// Shared i18n, theme and navigation for all pages.
// Elements opt in to translation with data-i18n="<key>" (sets textContent)
// or data-i18n-aria="<key>" (sets aria-label).
const translations = {
    en: {
        // Navigation
        homeTitle: "Home",
        articlesTitle: "Articles",
        conferencesTitle: "Talks",
        teachingTitle: "Teaching",
        contactTitle: "Contact",
        appsTitle: "Apps",
        menuToggleLabel: "Toggle navigation menu",
        themeToggleLabel: "Switch between light and dark theme",

        // Home / hero
        heroEyebrow: "Data Engineer",
        heroGreeting: "Hi, I'm",
        heroLead: "I'm a data engineer. I build data platforms and data products — and I write, speak and teach about the craft.",
        heroCtaArticles: "Read my writing",
        heroCtaContact: "Get in touch",
        whatEyebrow: "What I do",
        whatHeading: "Data engineering, in practice and out loud",
        whatWritingTitle: "Writing",
        whatWritingDesc: "Articles on data products, data contracts and the platform work behind them, mostly on the Adevinta tech blog.",
        whatSpeakingTitle: "Speaking",
        whatSpeakingDesc: "Conference talks and podcast episodes on building and running data platforms.",
        whatTeachingTitle: "Teaching",
        whatTeachingDesc: "Data engineering and machine learning on masters programmes and professional courses.",

        // Section headings
        articlesHeading: "Articles",
        conferencesHeading: "Talks",
        teachingHeading: "Places where I teach",
        contactHeading: "Contact",
        articlesIntro: "Things I've written about data engineering, mostly on the Adevinta tech blog.",
        conferencesIntro: "Conference talks and podcast episodes, most of them available to watch online.",
        teachingIntro: "Courses and masters programmes where I teach data engineering and machine learning.",
        contactIntro: "The quickest way to reach me is LinkedIn. Scan the code or use the button below.",

        // Talks
        conferencesPodcast: "Podcast Episode",
        conferencesGable: "Gable Conference",
        conferencesCodely: "Codely Conference",
        conferencesDama: "DAMA Conference",
        conferencesPodcastDate: "February 2026",
        conferencesPodcastDesc: "Podcast episode about data engineering",
        conferencesGableDate: "March 2025",
        conferencesGableDesc: "Implementation of data contracts in Adevinta in Spain",
        conferencesCodelyDate: "January 2025",
        conferencesCodelyDesc: "Building a self-serving data platform – talk at Codely TV.",
        conferencesDamaDate: "December 2023",
        conferencesDamaDesc: "Transitioning from local scripts to data products in Adevinta Spain.",

        // Articles
        articleDate1: "November 2024",
        articleDate2: "April 2024",
        articleDate3: "April 2024",
        articleCoauthor3: "Co-authored with Marta Diaz",

        // Teaching
        teachingSubject1: "Final Project Tutor",
        teachingSubject2: "Data processing with Databricks",
        teachingSubject3: "Machine Learning with Spark",
        teachingSubject4: "MLOps",
        teachingSubject5: "Spark",

        // Apps page
        appsHeading: "Android apps",
        appsIntro: "Side projects I build and maintain on my own: quizzes, vocabulary flashcards and small everyday tools. Most of them are in Galician, and all of them are free.",
        appsLiveHeading: "Available on Google Play",
        appsLiveNote: "Published and available to everyone.",
        appsTestingHeading: "In closed testing",
        appsTestingNote: "These apps are still in closed testing on Google Play, so they aren't publicly listed yet. I'm looking for testers — join the testing group for an app and you'll be able to install it from Google Play and send me feedback. Any help is very welcome.",
        badgeLive: "On Google Play",
        badgeTesting: "Closed testing",
        appsPlayCta: "Google Play",
        appsTesterCta: "Become a tester",

        appRedquizName: "Red Quiz",
        appRedquizDesc: "A political geography quiz: flags, people and historical events, with online challenges against other players.",
        appGalicianName: "Palabras Galegas",
        appGalicianDesc: "Learn Galician vocabulary with flashcards, home-screen widgets, daily reminders and pronunciation.",
        appMultiplicaName: "MultiplicApp",
        appMultiplicaDesc: "Practise multiplication tables. Built for kids, with progress tracking and short timed drills.",
        appForxarpgName: "Forxa de Lendas",
        appForxarpgDesc: "A step-by-step character creator for classic fantasy roleplaying games — races, classes, stats and equipment.",
        appBatterytempName: "Battery Temp",
        appBatterytempDesc: "See your battery temperature at a glance from a home-screen widget, without opening anything.",
        appEnguardiaName: "Enguardia",
        appEnguardiaDesc: "Shift scheduling for medical teams: build a rota that respects everyone's availability and constraints.",
        appValyrianName: "Valyrian Vocabulary",
        appValyrianDesc: "High Valyrian flashcards, with a hand-checked verb conjugation table and widgets to review every day.",
        appRussianName: "Russian Vocabulary",
        appRussianDesc: "Russian vocabulary flashcards with real pronunciation, conjugation tables and home-screen widgets.",

        // Footer
        footerNote: "Built with plain HTML, CSS and JavaScript.",
        footerNav: "Site links"
    },
    gl: {
        // Navegación
        homeTitle: "Portada",
        articlesTitle: "Artigos",
        conferencesTitle: "Charlas",
        teachingTitle: "Docencia",
        contactTitle: "Contacto",
        appsTitle: "Apps",
        menuToggleLabel: "Amosar ou agochar o menú",
        themeToggleLabel: "Cambiar entre tema claro e escuro",

        // Portada
        heroEyebrow: "Enxeñeiro de datos",
        heroGreeting: "Ola, son",
        heroLead: "Son enxeñeiro de datos. Constrúo plataformas e produtos de datos — e escribo, dou charlas e imparto clase sobre o oficio.",
        heroCtaArticles: "Le os meus artigos",
        heroCtaContact: "Contacta comigo",
        whatEyebrow: "A que me dedico",
        whatHeading: "Enxeñaría de datos, na práctica e en voz alta",
        whatWritingTitle: "Escrita",
        whatWritingDesc: "Artigos sobre produtos de datos, contratos de datos e o traballo de plataforma que hai detrás, sobre todo no blog técnico de Adevinta.",
        whatSpeakingTitle: "Charlas",
        whatSpeakingDesc: "Conferencias e episodios de podcast sobre construír e manter plataformas de datos.",
        whatTeachingTitle: "Docencia",
        whatTeachingDesc: "Enxeñaría de datos e aprendizaxe automática en másteres e cursos profesionais.",

        // Cabeceiras de sección
        articlesHeading: "Artigos",
        conferencesHeading: "Charlas",
        teachingHeading: "Cursos onde dou clase",
        contactHeading: "Contacto",
        articlesIntro: "Cousas que escribín sobre enxeñaría de datos, sobre todo no blog técnico de Adevinta.",
        conferencesIntro: "Charlas en conferencias e episodios de podcast, case todos dispoñibles en liña.",
        teachingIntro: "Cursos e másteres onde imparto enxeñaría de datos e aprendizaxe automática.",
        contactIntro: "O xeito máis rápido de contactar comigo é LinkedIn. Escanea o código ou usa o botón de abaixo.",

        // Charlas
        conferencesPodcast: "Episodio de Podcast",
        conferencesGable: "Conferencia Gable",
        conferencesCodely: "Conferencia Codely",
        conferencesDama: "Conferencia DAMA",
        conferencesPodcastDate: "Febreiro 2026",
        conferencesPodcastDesc: "Episodio de podcast sobre enxeñaría de datos",
        conferencesGableDate: "Marzo 2025",
        conferencesGableDesc: "Implementación de contratos de datos en Adevinta en España",
        conferencesCodelyDate: "Xaneiro 2025",
        conferencesCodelyDesc: "Construíndo unha plataforma de datos self-service – charla en Codely TV.",
        conferencesDamaDate: "Decembro 2023",
        conferencesDamaDesc: "Transición de scripts locais a produtos de datos en Adevinta España.",

        // Artigos
        articleDate1: "Novembro 2024",
        articleDate2: "Abril 2024",
        articleDate3: "Abril 2024",
        articleCoauthor3: "Coescrito con Marta Diaz",

        // Docencia
        teachingSubject1: "Titor de Proxecto Final",
        teachingSubject2: "Procesamento de datos con Databricks",
        teachingSubject3: "Aprendizaxe Automática con Spark",
        teachingSubject4: "MLOps",
        teachingSubject5: "Spark",

        // Páxina de apps
        appsHeading: "Apps de Android",
        appsIntro: "Proxectos persoais que fago e manteño pola miña conta: test, tarxetas de vocabulario e pequenas ferramentas do día a día. A maioría están en galego e todas son de balde.",
        appsLiveHeading: "Dispoñibles en Google Play",
        appsLiveNote: "Publicadas e dispoñibles para todo o mundo.",
        appsTestingHeading: "En proba pechada",
        appsTestingNote: "Estas apps aínda están en proba pechada en Google Play, así que non aparecen na busca. Ando a procurar probadores — únete ao grupo de probas dunha app e poderás instalala desde Google Play e enviarme comentarios. Calquera axuda é benvida.",
        badgeLive: "En Google Play",
        badgeTesting: "Proba pechada",
        appsPlayCta: "Google Play",
        appsTesterCta: "Quero ser probador",

        appRedquizName: "Test Vermello",
        appRedquizDesc: "Un test de xeografía política: bandeiras, persoas e feitos históricos, con desafíos en liña contra outros xogadores.",
        appGalicianName: "Palabras Galegas",
        appGalicianDesc: "Aprende vocabulario galego con tarxetas, widgets na pantalla de inicio, recordatorios diarios e pronuncia.",
        appMultiplicaName: "MultiplicApp",
        appMultiplicaDesc: "Practica as táboas de multiplicar. Pensada para a rapazada, con seguimento do progreso e retos cronometrados.",
        appForxarpgName: "Forxa de Lendas",
        appForxarpgDesc: "Un creador de personaxes paso a paso para xogos de rol de fantasía clásicos — razas, clases, atributos e equipo.",
        appBatterytempName: "Temp. Batería",
        appBatterytempDesc: "Consulta a temperatura da batería dunha ollada desde un widget, sen abrir nada.",
        appEnguardiaName: "Enguardia",
        appEnguardiaDesc: "Organización de gardas para equipos médicos: monta un cadro que respecte a dispoñibilidade e as restricións de cadaquén.",
        appValyrianName: "Vocabulario Valyrio",
        appValyrianDesc: "Tarxetas de alto valyrio, cunha táboa de conxugación revisada a man e widgets para repasar cada día.",
        appRussianName: "Vocabulario Ruso",
        appRussianDesc: "Tarxetas de vocabulario ruso con pronuncia real, táboas de conxugación e widgets na pantalla de inicio.",

        // Rodapé
        footerNote: "Feito con HTML, CSS e JavaScript, sen frameworks.",
        footerNav: "Ligazóns do sitio"
    }
};

/* ===== Language ===== */

function changeLanguage(lang) {
    const dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        const value = dict[el.dataset.i18n];
        if (value !== undefined) {
            el.textContent = value;
        }
    });

    // Same lookup, but writes aria-label instead of textContent.
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
        const value = dict[el.dataset.i18nAria];
        if (value !== undefined) {
            el.setAttribute("aria-label", value);
        }
    });

    localStorage.setItem("preferredLanguage", lang);
    document.documentElement.lang = lang;

    // Reflect active language on the switcher buttons.
    document.querySelectorAll(".language-switcher button").forEach(function (btn) {
        btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
}

/* ===== Theme =====
   No stored value means "follow the OS", which the CSS already does.
   A stored value pins data-theme on <html> and wins over the media query.
   The inline script in each page's <head> applies this before first paint. */

function systemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function currentTheme() {
    return document.documentElement.dataset.theme || systemTheme();
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
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

    // Theme toggle
    const themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            applyTheme(currentTheme() === "dark" ? "light" : "dark");
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

    // Current year in the footer.
    const year = document.querySelector("[data-year]");
    if (year) {
        year.textContent = String(new Date().getFullYear());
    }
});
