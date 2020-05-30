import React, { useState } from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import email from '../images/email.svg'
import { Img } from 'react-image'
import { useForm } from 'react-hook-form';
import Error from '../components/error'
import { navigate } from "gatsby"



export default function Contact({ props }) {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState('')
  const [result, setResult] = useState(false)
  const [type, setType] = useState('success')
  const imgStyle = { position: 'fixed', zIndex: -6, opacity: 0.7, top: '55%' }

  const input = 'input dark:bg-gray-700 dark:border-none dark:text-gray-900'

  const sendMail = async (data) => {
    try {
      await fetch("https://kennymark.co.uk/.netlify/functions/contact", {
        "method": "POST",
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify(data)
      })
      setResult(true)
      console.log({ data })

      setTimeout(() => navigate('/'), 2000);

      setMessage('Email has been sucessfully sent. Redirecting...')

    } catch (error) {
      triggerErrors()
    }

  }

  const triggerErrors = () => {
    setType('error')
    setResult(true)
    setMessage(`Email hasn't been sent`)
  }

  return (
    <Layout>
      <SEO title="Contact" />


      <div className="p-3 text-gray-700 dark:text-gray-500" data-sal='fade' data-sal-duration='400' style={{ zIndex: 21 }}>


        <form method="post" className="flex-row items-center" onSubmit={handleSubmit(sendMail)} data-netlify='true'>
          <Img src={email} style={imgStyle} className='bg-gray-100 p-6 h-32 rounded-lg dark:hidden' alt='done' />
          <Error type={type} show={result} message={message} />

          <div className="flex-row lg:flex">
            <div className="flex-1 lg:p-3">
              <h3 className='text-blue-600 dark:text-blue-800'>Email: <span className='font-light'>
                <a href="mailto:markcoffiekenneth@gmail.com" className='text-blue-600'>
                  markcoffiekenneth@gmail.com
                </a>
              </span>
              </h3>

              <div className='mt-3 flex flex-col'>
                <label htmlFor="subject" className="my-1">Subject</label>
                <input className={input} name='subject' id='subject' placeholder="Website dev" ref={register} />
              </div>

              <div className='mt-3 flex flex-col'>
                <label htmlFor="name" className="my-1">Name</label>
                <input className={input} placeholder="Jane Doe" name='name' id='name' required ref={register} />
              </div>

              <div className='mt-3 flex flex-col'>
                <label htmlFor="email" className=" my-1">Email</label>
                <input className={input} placeholder="jane@example.com" name='email' required type='email' id='email' ref={register} />
              </div>
            </div>

            <div className="flex-1 lg:mt-9 lg:p-3 sm:mt-10">
              <label htmlFor="message" className="text-gray-700">Message</label>
              <textarea className={`mt-1 ${input}`} rows="9" placeholder="I need a website" required name='message' id='message' ref={register} />
              <div className='mt-3 flex flex-col'>
                <button className="p-3 bg-yellow-400 my-3 outline-none rounded dark:text-gray-900" type='submit'>Submit</button>
              </div>
            </div>

          </div>

        </form>
      </div>

    </Layout>

  );
}
