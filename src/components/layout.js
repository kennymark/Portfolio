
import React from "react"
import { useStaticQuery, graphql as gql } from "gatsby"

import Header from "./header"
import "../styles/layout.css"

const Layout = ({ children, largeContainer = false }) => {
  const year = new Date().getFullYear() || '2020'
  const data = useStaticQuery(gql`
    query SiteAndFileData {
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
    <div className="dark:bg-gray-900 dark:text-gray-200">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={`${largeContainer ? 'container-md w-4/5' : 'container'} mx-auto mt-6 body-main`}>
        <main >
          {children}
        </main>
      </div>
      <footer className='dark:border-gray-800 border-t w-full h-20 flex justify-center absolute dark:bg-gray-900 '>
        <div className="self-center text-center ">
          <span>Built with <span role='img' aria-label="love">❤️ </span> by Kenny Mark  ©{year}</span>
          <a href={data.allFile.edges[0].node.publicURL} target='_blank' className=" ml-3 rounded shadow-sm bg-yellow-300 p-2 text-gray-700 hover:shadow-xl hover:text-black text-sm" rel="noopener noreferrer">View CV</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
