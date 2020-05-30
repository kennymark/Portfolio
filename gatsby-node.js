const path = require(`path`)
const slug = require('slug')


// Log out information after a build is done
const data = require('./src/data/projects')
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`The product page has been complicated`)
}



exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/templates/project.js`)

  data.topProjects.forEach(project => {
    createPage({
      path: `project/${slug(project.name)}`,
      component: projectTemplate,
      context: {
        project: project,
      },
    })
  })
}