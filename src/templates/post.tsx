import { Box, Flex, Text } from '@chakra-ui/core'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { startCase } from 'lodash'
import React, { createRef, useEffect } from 'react'
import { Img } from 'react-image'
import AuthorCard from '../components/blog/AuthorCard'
import Date from '../components/blog/Date'
import Layout from '../components/layout/layout'
import MDXWrapper from '../components/mdx/provider'
import SEO from '../components/seo'
import PageHeader from '../components/ui/page-header'


function Post({ pageContext: { node: post }, }) {
  const { author, date, image, title } = post.frontmatter

  const ref = createRef()

  useEffect(() => {
    console.log({ ref: ref.current })
    return () => { }
  }, [])

  return (
    <Layout>
      <SEO title={startCase(post.frontmatter.title)} />

      <Box p={4} mx='auto' w={['', '', 900]} ref={ref} fontSize={20} pb={20}>
        <PageHeader title={title} />

        <Flex justifyContent='space-evenly' alignItems='center' mb={4} fontWeight='600' color='gray.600' direction={['column', null, 'row']} fontSize={16}>
          <AuthorCard author={author} />
          <Date date={date} />
          <Text bg='gray.200' p={2} rounded='md' >{post.timeToRead} min read</Text>
        </Flex>

        <Box as={Img} src={image} height={[400, '', 620]} rounded='lg' mb={10} />

        <MDXWrapper>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXWrapper>
      </Box>

    </Layout>
  )
}


export default Post
