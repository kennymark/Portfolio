import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Heading, Text, Box } from "@chakra-ui/core"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Box mt={5}>
      <Heading size='2xl' textAlign='center'>NOT FOUND</Heading>
      <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </Box>

  </Layout>
)

export default NotFoundPage
