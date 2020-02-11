const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/src/pages/index.js"))),
  "component---src-pages-profile-js": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/src/pages/profile.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/src/pages/projects.js"))),
  "component---src-pages-skills-js": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/src/pages/skills.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/src/pages/thanks.js")))
}

