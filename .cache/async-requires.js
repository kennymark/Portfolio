// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("./../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-blog-tsx": () => import("./../src/pages/blog.tsx" /* webpackChunkName: "component---src-pages-blog-tsx" */),
  "component---src-pages-index-tsx": () => import("./../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-profile-tsx": () => import("./../src/pages/profile.tsx" /* webpackChunkName: "component---src-pages-profile-tsx" */),
  "component---src-pages-projects-tsx": () => import("./../src/pages/projects.tsx" /* webpackChunkName: "component---src-pages-projects-tsx" */),
  "component---src-templates-post-tsx": () => import("./../src/templates/post.tsx" /* webpackChunkName: "component---src-templates-post-tsx" */),
  "component---src-templates-project-tsx": () => import("./../src/templates/project.tsx" /* webpackChunkName: "component---src-templates-project-tsx" */)
}

