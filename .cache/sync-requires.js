const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/src/pages/404.tsx"))),
  "component---src-pages-blog-tsx": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/src/pages/blog.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/src/pages/index.tsx"))),
  "component---src-pages-profile-tsx": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/src/pages/profile.tsx"))),
  "component---src-pages-projects-tsx": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/src/pages/projects.tsx"))),
  "component---src-templates-post-tsx": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/src/templates/post.tsx"))),
  "component---src-templates-project-tsx": hot(preferDefault(require("/Users/kennymark/Desktop/Projects/React-apps/portfolio/src/templates/project.tsx")))
}

