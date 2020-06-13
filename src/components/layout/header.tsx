import { Box, Flex, Icon, Link as NLink, useColorMode, Text } from "@chakra-ui/core";
import { Link } from 'gatsby';
import React from "react";
import Github from '../../images/github.svg';






const MenuItems = ({ children, to }) => {
  const { colorMode } = useColorMode()
  return (
    <Link to={to} activeStyle={{ color: colorMode === 'light' ? 'black' : '#38a169', marginRight: 15 }}
      style={{ color: 'gray.500', marginRight: 15, fontFamily: 'playfair', marginTop: 10 }} >
      {children}
    </Link>
  )
};

const Header = props => {
  const [show, setShow] = React.useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggle = () => {
    console.log({ show })
    setShow(!show)
  }

  return (
    <Flex
      as="nav"
      alignItems={["start", "center"]}
      justifyContent="center"
      wrap="wrap"
      px={10}
      py={6}
      borderBottom={['1px', 0]}
      borderBottomColor={colorMode === 'light' ? 'gray.100' : 'green.900'}
      direction={['column', 'row']}
      color="gray.700"
      {...props}>

      <Box display={['inline', 'none']} mr={3} onClick={handleToggle} color={colorMode === 'light' ? 'gray.800' : 'green.500'}>
        <svg fill="currentColor" width="25px" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </Box>

      <Flex
        color='gray.500'
        fontWeight='bold'
        flexGrow={1}
        direction={['column', 'row']}
        display={[show ? 'flex' : 'none', 'flex']}
        transition='all .5s linear'
      >
        <MenuItems to='/'>Home</MenuItems>
        <MenuItems to='/blog'>Blog</MenuItems>
        <MenuItems to='/projects'>Projects</MenuItems>
      </Flex>

      <Flex
        alignItems={['start', 'center']}
        direction={['column', 'row']}
        display={[show ? 'flex' : 'none', 'flex']}
        fontWeight='600'
        pos='relative'
        top={2}
        mt={[2, 0]}
      >
        <Flex onClick={toggleColorMode} pos='relative' top={-5}>
          <Icon name={colorMode === 'dark' ? 'sun' : 'moon'}
            mr={[0, 3]}
            color={colorMode === 'dark' ? 'green.400' : 'gray.600'}
            fontSize={[20, 24]}
          />
          <Text ml={2} display={[show ? 'flex' : 'none']} color='gray.500'>Turn  on {colorMode == 'light' ? 'dark' : 'light'} mode</Text>
        </Flex>


        <NLink href='https://github.com/kennymark' isExternal _focus={{ outline: 0 }} mt={[1, -3]} alignItems='center' color='gray.500' display='flex'>
          <Box as='img' alt="github-icon" src={Github} h={[5, 6]} color='red.700' />
          <Text ml={2} display={[show ? 'flex' : 'none']}>Visit my Github</Text>
        </NLink>

      </Flex>

    </Flex>
  );
};

export default Header;