//@ts-nocheck
import { Box, Flex, Heading, Icon, Link as NLink, Text } from '@chakra-ui/core'
import { Link } from 'gatsby'
import React from 'react'
import { Img } from 'react-image'
import { mainProjects } from '../../data/projects'
import PageHeader from '../ui/page-header'

function Portfolio() {
  return (
    <Box>
      <Flex alignItems='center' mb={5} justify={['space-around', null, 'space-between']}>
        <PageHeader simple title='Projects' />

        <NLink as={Link} to='/projects' fontSize={20} color='gray.500' fontWeight='bold' _hover={{ color: 'green.500' }} _focus={{ outline: 0 }}>
          View More projects <Icon name='chevron-right' />
        </NLink>
      </Flex>

      {mainProjects.map(project => (
        <Flex key={project.name} mb={['', '', 10, 20]} p={10} bg={project.color + '.100'}
          rounded={['', '', 'lg']} h={[500, 600, 700]}
          position='relative' direction='column' alignItems='center' justifyContent='space-around'>
          <Text textAlign='center' fontWeight='bold'
            position='relative'
            fontSize={20}
            mt={-4}
            pb={2}
            textTransform='capitalize'
            color={project.color + '.800'}>
            {project.name}
          </Text>

          <Box as={Img} src={project.image} alt={project.name} width='95%' shadow='lg' />
        </Flex>

      ))}

    </Box>
  )
}

export async function getStaticProps() {

  return {
    props: ''
  }
}


export default Portfolio