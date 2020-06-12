//@ts-nocheck
import { Box, Heading, PseudoBox, Flex, Text, Link as NLink, Button, useColorMode } from '@chakra-ui/core';
import { Link } from "gatsby";
import React from 'react';
import { Img } from 'react-image';
import Masonry from 'react-masonry-css';
import slug from 'slug';
import Layout from '../components/layout/layout';
import SEO from "../components/seo";
import { extraProjects, topProjects } from '../data/projects';
import PageHeader from '../components/ui/page-header';

export default function Projects() {
  const { colorMode } = useColorMode()

  return (
    <Layout largeContainer>
      <SEO title="Projects" />

      <PageHeader title='Portfolio Showcase' />

      <Box maxW={[null, '', 1400]} mx='auto'>
        <Masonry
          breakpointCols={{ default: 3, 800: 2, 600: 1 }}
          className="my-masonry-grid "
          columnClassName="my-masonry-grid_column">

          {topProjects.reverse().map((project, idx) => (
            <Link to={`/project/${slug(project.name)}`} className='rounded-lg' key={idx}>
              <PseudoBox bg={project.color} p={5} rounded='lg' m={4} cursor='pointer' _hover={{ shadow: '2xl' }} position='relative' className='proj' minH={300} >

                <Heading as='h2' fontSize={18} textTransform='capitalize' textAlign='center' mb={2} color='black'>{project.name} </Heading>
                <Box as={Img} src={project.image} alt={project.name} rounded='md' shadow='lg' />

                <Flex
                  direction='column'
                  bg={project.color}
                  w='inherit'
                  height='inherit'
                  position='absolute'
                  top={0}
                  bottom={0}
                  right={0}
                  borderRadius='inherit'
                  p={4}
                  justifyContent='center'
                  className=" desc"
                >

                  <Box position='relative' textAlign='center' mx='auto' mb={5} fontSize={20}>{project.description}</Box>

                </Flex>

              </PseudoBox>
            </Link>

          ))}
        </Masonry>
      </Box>



      <Flex direction='column' py={8} px={[4, null, null, null]} justifySelf='center' maxW={[null, '', 1400]} mx='auto'>
        <PageHeader simple title='More...' />
        {extraProjects.map((project, idx) => (

          <Box bg='gray.200' rounded='md' p={3} mt={4} key={idx} >
            <Flex justifyContent='space-between'>

              <Heading textTransform='capitalize' size='lg' mb={2} fontSize={20} color='black'>{project.name} </Heading>
              <Button as={NLink} href={project.link} isExternal
                px={5} ml={2} rounded='md' bg='white'
                _hover={{ textDecor: 0, bg: 'green.500', color: 'white', outline: 0, textDecoration: 'none' }}>
                View
              </Button>
            </Flex>
            <Text color='gray.500' fontWeight='semibold' w='70%'>{project.description}</Text>
          </Box>
        ))}
      </Flex>

    </Layout>
  );
}
