const path = require(`path`)
const slug = require('slug')
const { createFilePath } = require('gatsby-source-filesystem')


// Log out information after a build is done
const data = require('./src/data/projects')
const blogQuery = require('./src/data/queries/blogQuery')


function parseBlogString(string) {
  const title = string.replace(/blog\D+/gi, '')
  return title.replace(/[0-9]/, '')
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const generatedSlug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: '/blog/' + slug(parseBlogString(generatedSlug))
    })
  }
}


// For creation of blog posts
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data: { allMdx: { edges: posts } } } = await graphql(`query BlogPost {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            author
            date
            title
            image
          }
          timeToRead
          fields {
            slug
          }
          body
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            date
            image
            title
          }
          timeToRead
        }
        next {
          frontmatter {
            author
            date
            image
            title
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }`)

  const projectTemplate = path.resolve(`src/templates/project.tsx`)
  const blogTemplate = path.resolve(`src/templates/post.tsx`)

  data.topProjects.forEach(project => {
    createPage({
      path: `project/${slug(project.name)}`,
      component: projectTemplate,
      context: { project: project },
    })
  })

  posts.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: blogTemplate,
      context: { ...post },
    })
  })

}