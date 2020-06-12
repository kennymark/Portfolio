import React from 'react'
import { Box, Flex, Link } from '@chakra-ui/core'

function Footer({ data, year }) {
  return (
    <Flex as='footer' h={24} justifyContent='center' borderTop='1px' borderColor='gray.200' alignItems='center' flexDirection='column'>
      <Box as='span'>Built with <span role='img' aria-label="love">❤️ </span> by Kenny Mark  ©{year}</Box>
      <Link href={data.allFile.edges[0].node.publicURL} isExternal fontWeight='bold' _hover={{ color: 'green.500' }}>View CV</Link>
    </Flex>
  )
}

export default Footer
