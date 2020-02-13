export const carouselSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    className: 'w-full',
    centerMode: true,
    centerPadding: "60px",
    focusOnSelect: false,
    swipeToSlide: true,
    verticalMode: true,
    responsive: [
        {
            breakpoint: 650,
            settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, }
        },
        {
            breakpoint: 950,
            settings: { slidesToShow: 2, slidesToScroll: 2, centerMode: true, }
        },
    ]
};

export const pages = [
    { link: '/', name: 'Home' },
    { link: 'profile', name: 'Profile' },
    { link: 'projects', name: 'Projects' },
    { link: 'skills', name: 'Skills' },
    { link: 'contact', name: 'Contact' },
]

export const skillTypes = {
    frontend: [
        "HTML", "CSS/SASS", "CSS Frameworks", "React, Angular, Vue", "JQuery,JavaScript/ES6+", "Responsive Design", "Typescript",
    ],
    backend: [
        "Backend MVC with NodeJS", "ExpressJs/KoaJs", "Authentication / Authorization",
        "Templating with hbs, ejs", "RESTFUL API Design/Dev", "GraphQL Server",
        "NPM, Nodejs, Gulp etc."
    ],
    databases: ["MsSQL", "MySQL", "MongoDB", "Data modelling", "Normalization"],
    devops: ["AWS EC2/S3", "Google  Cloud", "Git", "APIs", "CI/CD", "Testing (Unit, Integration)"],
    extras: ["App design with Adobe XD", "App dev with React Native",
        "Project management with Jira, Confluence, Git etc.", "Cross-browser dev/testing", "Agile (SCRUM)",
    ]

}