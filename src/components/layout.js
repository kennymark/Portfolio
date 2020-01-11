/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { animations } from 'react-animation'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const year = new Date().getFullYear() || '2020'
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container mx-auto mt-6">
        <main style={{ animation: animations.fadeIn }}>
          {children}</main>

      </div>
      <footer className=' border-t w-full  mt-3 h-20 flex justify-center absolute'>
        <div className="self-center">
          Built with <span role='img' aria-label="love">❤️ </span> by Kenny Mark  ©{year}
        </div>
        {/* <a href="https://www.gatsbyjs.org" target="">Gatsby</a> */}
      </footer>
    </>
  )
}

Layout.propTypes = {
  // children: PropTypes.node.isRequired,
}

export default Layout
