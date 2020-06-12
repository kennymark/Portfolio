import { Box, Flex, SimpleGrid, Text, useColorMode } from '@chakra-ui/core';
import { graphql, Link } from 'gatsby';
import React from 'react';
import { Img } from 'react-image';
import AuthorCard from '../components/blog/AuthorCard';
import Layout from '../components/layout/layout';
import SEO from "../components/seo";
import PageHeader from '../components/ui/page-header';

function Blog({ data: { allMdx: { edges: posts } } }) {
  const { colorMode } = useColorMode()
  return (
    <Layout>
      <SEO title='Blog Posts' />

      <Box p={3}>
        <PageHeader title='Thoughts' />
        {posts.map(({ node }) => {
          const { title, author, image } = node.frontmatter
          return (
            <Link to={node.fields.slug} key={title}>
              <SimpleGrid columns={[1, 1, 2]} rounded='lg' shadow='md' mb={5}
                borderColor='green.900' minH={400}
                maxW={['', '', 1000]} mx='auto'>

                <Box as={Img} src={image} h={[250, 200, '100%']} w={['100%', null]} roundedLeft={['', '', 'lg']} bgAttachment='fixed' />

                <Flex justify='space-around' direction='column' key={node.id} p={6}>
                  <PageHeader title={title} simple />
                  <Text color='gray.500'>{node.excerpt}</Text>
                  <Flex justify='space-between' alignItems='center'>
                    <AuthorCard author={author} />
                    <Text bg='gray.200' p={2} rounded='md' >{node.timeToRead}  min read</Text>
                  </Flex>

                </Flex>
              </SimpleGrid>
            </Link>
          )
        })}
      </Box>


    </Layout>
  )
}

export default Blog

export const query = graphql`
query BlogPosts {
  __typename
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
        excerpt(pruneLength: 250)
        fields {
          slug
        }
      }
    }
  }
}
`