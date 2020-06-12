import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Box } from '@chakra-ui/core'
import Contact from '../components/sections/contact'
import Main from '../components/sections/main'
import Portfolio from '../components/sections/portfolio'
import { Fragment } from 'react'
import Skills from "../components/sections/skills"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Fragment>
      <Main />

      <Box w={['', '', 700,]} mx='auto' mt={20} >
        <Portfolio />
      </Box>

      <Box w={['', '', 700, 1400,]} mx='auto' mt={20} >
        <Skills />
      </Box>

      <Box w={['', '', '', 700]} mx='auto' mt={20} p={4} >
        <Contact />
      </Box>
    </Fragment>
  </Layout >
)


export default IndexPage