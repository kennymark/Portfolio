import { Avatar, Flex, Link as NLink } from '@chakra-ui/core'
import { Link } from 'gatsby'
import React from 'react'

function AuthorCard({ author }) {
  return (
    <Flex alignItems='center'>
      <Avatar name="me" size='sm' src="/static/d9e73527234ffec65fa70971c88df689/14b42/me.jpg" mr={3} />
      <NLink as={Link} to='/profile' _hover={{ color: 'green.500' }} _focus={{ outline: 0 }} fontWeight='600' color='gray.500' >{author} </NLink>
    </Flex>
  )
}

export default AuthorCard
