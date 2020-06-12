//@ts-check
import React from "react"
import { useStaticQuery, graphql as gql } from "gatsby"
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import Header from './header'
import Footer from './footer'
import theme from '../theme'
import '../../styles/main.css'


const Layout = ({ children }) => {
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
          }
        }
      }
    }
  `)


  return (
    <>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <ColorModeProvider>
          <Header />
          <main className='main'>{children}</main>
          <Footer data={data} year={year} />
        </ColorModeProvider>
      </ThemeProvider>

    </>
  )
}

export default Layout
