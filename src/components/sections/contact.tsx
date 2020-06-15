
//@ts-nocheck
import { Box, Button, FormControl, FormLabel, Input, Stack, Textarea, useColorMode, useToast } from '@chakra-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import PageHeader from '../ui/page-header';

function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const toast = useToast()
  const { colorMode } = useColorMode()

  const commonToast = {
    position: 'top-right',
    variant: 'subtle',
    isClosable: true
  }

  const sendMail = async (data) => {
    // console.log({ data })
    try {
      await fetch("https://kennymark.co.uk/.netlify/functions/contact", {
        "method": "POST",
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify(data)
      })

      toast({
        title: 'Email sent',
        description: 'Email has been sucessfully sent.',
        status: 'success',
        ...commonToast
      })
    } catch (error) {
      toast({
        title: 'Email sending failed',
        description: 'The email has failed to send. Please try again...',
        status: 'error',
        ...commonToast
      })
    }

  }

  const props = {
    size: 'lg',
    rounded: 'md',
    border: '1px',
    borderColor: colorMode == 'light' ? 'gray.200' : 'gray.900',
    focusBorderColor: colorMode == 'light' ? 'gray.900' : 'green.900',
    _hover: {
      border: '1px',
      borderColor: colorMode === 'light' ? 'gray.400' : 'green.900',
    }
  }

  return (
    <Box pb={40} >
      <PageHeader simple title='Contact me' hasB />
      <form onSubmit={handleSubmit(sendMail)}>
        <Stack>

          <FormControl mb={5}>
            <FormLabel htmlFor="subject" color='gray.600'>Subject</FormLabel>
            <Input type="text" name="subject" aria-describedby="subject-helper-text" {...props} ref={register} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="name" color='gray.600'>Name</FormLabel>
            <Input type="name" name="name" ref={register} aria-describedby="name-helper-text" {...props} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email" color='gray.600'>Email address</FormLabel>
            <Input type="email" name="email" ref={register} aria-describedby="email-helper-text" {...props} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email" color='gray.600'>Message</FormLabel>
            <Textarea type='textarea' name="message" ref={register} aria-describedby="message-box" {...props} h={300} />
          </FormControl>

          <FormControl>
            <Button type='submit' bg='gray.900' variant='solid' color='white' width='100%' height={55} mt={5}
              _focus={{ outline: 0, border: '1px' }}
              _active={{ border: 0 }}
              _hover={{ color: 'gray.900', bg: 'gray.500' }}>Submit</Button>
          </FormControl>
        </Stack>

      </form>

    </Box>

  )
}

export default Contact
