
//@ts-nocheck
import { Box, Button, FormControl, FormLabel, Input, Stack, Textarea, useColorMode, useToast, Text, FormErrorMessage } from '@chakra-ui/core';
import React from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import PageHeader from '../ui/page-header';
import { flatMap } from 'lodash';

function Contact() {
  const { register, handleSubmit, errors, reset } = useForm();

  const toast = useToast()
  const { colorMode } = useColorMode()

  const commonToast = {
    position: 'top-right',
    variant: 'subtle',
    isClosable: true
  }

  const props = {
    size: 'lg',
    rounded: 'md',
    border: '1px',
    color: colorMode == 'light' ? 'black' : 'gray.300',
    borderColor: colorMode == 'light' ? 'gray.200' : 'gray.900',
    focusBorderColor: colorMode == 'light' ? 'gray.900' : 'green.900',
    _hover: {
      border: '1px',
      borderColor: colorMode === 'light' ? 'gray.400' : 'green.900',
    }
  }

  const sendMail = async (data) => {

    try {
      await fetch("https://kennymark.co.uk/.netlify/functions/contact", {
        "method": "POST",
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify(data)
      })
      toast({
        title: 'Email sent',
        description: 'Email has been sucessfully sent.',
        status: 'success',
        ...commonToast
      })
      setTimeout(() => reset(), 2000);
    } catch (error) {
      toast({
        title: 'Email sending failed',
        description: 'The email has failed to send. Please try again...',
        status: 'error',
        ...commonToast
      })
    }

  }



  function setValidation(name: string, isMessage: boolean = false) {
    return {
      minLength: {
        value: 4,
        message: `${name} should be 4 characters or greater`
      },
      maxLength: isMessage ? 2000 : 40,
      required: `${name} is required`
    }
  }
  return (
    <Box pb={40} >
      <PageHeader simple title='Contact me' hasB />
      <form onSubmit={handleSubmit(sendMail)}>
        <Stack>

          <FormControl mb={5}>
            <FormLabel htmlFor="subject" color='gray.600'>Subject</FormLabel>
            <Input type="text" name="subject" aria-describedby="subject-helper-text" {...props} ref={register(setValidation('Subject'))} />
            <ErrorMessage errors={errors} name='subject' as={<Text color='red.600' />} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="name" color='gray.600'>Name</FormLabel>
            <Input type="name" name="name" ref={register(setValidation('Name'))} aria-describedby="name-helper-text" {...props} />
            <ErrorMessage errors={errors} name='name' as={<Text color='red.600' />} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email" color='gray.600'>Email address</FormLabel>
            <Input type="email" name="email" ref={register(setValidation('Email'))} aria-describedby="email-helper-text" {...props} />
            <ErrorMessage errors={errors} name='email' as={<Text color='red.600' />} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email" color='gray.600'>Message</FormLabel>
            <Textarea type='textarea' name="message" ref={register(setValidation('Message', true))} aria-describedby="message-box" {...props} h={300} />
            <ErrorMessage errors={errors} name='message' as={<Text color='red.600' />} />
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
