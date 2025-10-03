/**
 * PORTFOLIO CONFIGURATION FILE
 *
 * Personalizza questo file con le tue informazioni.
 * Tutti i dati del portfolio possono essere modificati qui
 * invece di cercarli nell'HTML.
 */

const portfolioConfig = {
    // Informazioni Personali
    personal: {
        name: "Il Tuo Nome",
        role: "Web Developer | Designer | Creative Professional",
        description: "Appassionato di tecnologia e design, creo esperienze digitali moderne e funzionali.",
        birthDate: "01/01/1990",
        location: "Città, Italia",
        email: "email@example.com",
        phone: "+39 123 456 7890"
    },

    // Social Media Links
    social: {
        linkedin: "https://linkedin.com/in/tuoprofilo",
        github: "https://github.com/tuousername",
        twitter: "https://twitter.com/tuousername",
        instagram: "https://instagram.com/tuousername"
    },

    // SEO & Meta Tags
    seo: {
        title: "Portfolio - Il Tuo Nome | Web Developer",
        description: "Portfolio professionale - Web Developer specializzato in sviluppo frontend e backend con tecnologie moderne.",
        keywords: "web developer, portfolio, react, node.js, javascript, frontend, backend",
        url: "https://tuodominio.com",
        ogImage: "https://tuodominio.com/assets/og-image.jpg"
    },

    // Skills
    skills: {
        frontend: [
            { name: "HTML/CSS", level: 90 },
            { name: "JavaScript", level: 85 },
            { name: "React", level: 80 }
        ],
        backend: [
            { name: "Node.js", level: 75 },
            { name: "Python", level: 70 },
            { name: "Database", level: 75 }
        ],
        tools: [
            { name: "Git", level: 85 },
            { name: "Figma", level: 80 },
            { name: "Photoshop", level: 70 }
        ]
    },

    // Experience
    experience: [
        {
            role: "Senior Web Developer",
            period: "2022 - Presente",
            company: "Nome Azienda",
            location: "Città",
            tasks: [
                "Sviluppo di applicazioni web moderne con React e Node.js",
                "Leadership tecnica per un team di 5 sviluppatori",
                "Implementazione di best practices e code review"
            ]
        },
        {
            role: "Web Developer",
            period: "2020 - 2022",
            company: "Nome Azienda",
            location: "Città",
            tasks: [
                "Sviluppo frontend e backend di progetti web",
                "Collaborazione con designer per implementare UI/UX",
                "Ottimizzazione delle performance delle applicazioni"
            ]
        },
        {
            role: "Junior Developer",
            period: "2018 - 2020",
            company: "Nome Azienda",
            location: "Città",
            tasks: [
                "Supporto allo sviluppo di applicazioni web",
                "Manutenzione e debug del codice esistente",
                "Apprendimento delle tecnologie moderne"
            ]
        }
    ],

    // Education
    education: [
        {
            degree: "Laurea in Informatica",
            period: "2015 - 2018",
            institution: "Università degli Studi, Città",
            thesis: "Sviluppo di applicazioni web moderne"
        },
        {
            degree: "Certificazioni",
            period: "2019 - 2023",
            certifications: [
                "Advanced React Developer",
                "Node.js Certification",
                "UI/UX Design Fundamentals"
            ]
        }
    ],

    // Projects
    projects: [
        {
            title: "E-Commerce Platform",
            description: "Piattaforma e-commerce completa con React, Node.js e MongoDB",
            icon: "fa-shopping-cart",
            technologies: ["React", "Node.js", "MongoDB"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Social Media Dashboard",
            description: "Dashboard per gestione social media con analytics avanzati",
            icon: "fa-chart-line",
            technologies: ["Vue.js", "D3.js", "API"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Portfolio Website",
            description: "Portfolio personale con animazioni e design moderno",
            icon: "fa-laptop-code",
            technologies: ["HTML", "CSS", "JavaScript"],
            liveUrl: "#",
            githubUrl: "#"
        }
    ],

    // Footer
    footer: {
        copyright: "2024 Il Tuo Nome. Tutti i diritti riservati."
    }
};

// Esporta la configurazione (se usi moduli ES6)
// export default portfolioConfig;
