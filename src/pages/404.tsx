import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Heading, Text, Box } from "@chakra-ui/core"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Error 404" />

    <Box mt={5}>
      <Heading size='2xl' textAlign='center'>Error 404: Not found</Heading>
      <Text textAlign='center' color='gray.500'>This page does not seem to exist</Text>
    </Box>

  </Layout>
)

export default NotFoundPage
