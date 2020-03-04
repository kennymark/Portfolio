
export const pages = [
    { link: '/', name: 'Home' },
    { link: 'profile', name: 'Profile' },
    { link: 'projects', name: 'Projects' },
    { link: 'skills', name: 'Skills' },
    { link: 'contact', name: 'Contact' },
]

export const skillTypes = {
    frontend: [
        "HTML, CSS/SASS, JS", "CSS Frameworks", "React, Angular, Vue", "Responsive Design", "Typescript",
    ].sort(),

    backend: [
        "MVC Paradigm", "Restful/ Graphql API's", "Auth with sessions/jwt",
        "Templating with hbs, ejs",
        "NPM, Nodejs, Gulp"
    ].sort(),
    databases: ["Sql databases", "MySQL", "MongoDB", "Data modelling", "Normalization"],

    devops: ["AWS, Google Cloud & Firebase", "Microservices", "Continous Development", "Continuous Delivery", "Testing (Unit, Integration)"].sort(),

    extras: ["UI design with Adobe XD", "App dev with React Native",
        "Familiarity with project managment tools.", "Cross-browser dev/testing", "Agile (SCRUM)",
    ].sort()

}