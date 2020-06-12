import React from 'react'
import { Img } from 'react-image'
import { Link } from 'gatsby'
import { Box, Flex, Link as NLink } from '@chakra-ui/core'

function AuthorCard({ author }) {
  return (
    <Flex alignItems='center'>
      <Box as={Img} h={8} w={8} src='/static/d9e73527234ffec65fa70971c88df689/14b42/me.jpg' rounded='full' mr={3} alt='avatar' />
      <NLink as={Link} to='/profile' _hover={{ color: 'green.500' }} _focus={{ outline: 0 }} fontWeight='600' color='gray.500' >{author} </NLink>

    </Flex>
  )
}

export default AuthorCard
