/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql as gql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const year = new Date().getFullYear() || '2020'
  const data = useStaticQuery(gql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            extension
            name
          }
        }
      }
    }
  `)


  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container mx-auto mt-6">
        <main >
          {children}
        </main>
      </div>
      <footer className=' border-t w-full  mt-3 h-20 flex justify-center absolute'>
        <div className="self-center text-center">
          Built with <span role='img' aria-label="love">❤️ </span> by Kenny Mark  ©{year}
          <a href={data.allFile.edges[0].node.publicURL} rel="noopener noreferrer" target='_blank' ßclassName="btn shadow-sm bg-yellow-300 p-1 text-black focus:outline-none hover:shadow-xl hover:underline  ml-2">View CV</a>
        </div>

      </footer>
    </>
  )
}

export default Layout
