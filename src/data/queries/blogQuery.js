module.exports.blogQuery = `query BlogPost {
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
}`