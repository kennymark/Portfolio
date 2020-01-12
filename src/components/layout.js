/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
        <main >
          {children}
        </main>
      </div>
      <footer className=' border-t w-full  mt-3 h-20 flex justify-center absolute'>
        <div className="self-center">
          Built with <span role='img' aria-label="love">❤️ </span> by Kenny Mark  ©{year}
          <button className="btn shadow-sm bg-yellow-300 p-1 text-black focus:outline-none hover:shadow-xl hover:underline  ml-2">Resumé</button>
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
