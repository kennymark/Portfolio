import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"

export default function Contact() {
  return (

    <Layout>
      <SEO title="Contact" />

      <div className="p-3" data-sal='fade' data-sal-duration='400'>

        <form action="https://getform.io/f/c4f252bb-d674-4113-9ff6-1a280733fed3" method="post" className="flex-row "
          data-netlify='true'>
          <div className="flex-row">
            <div className="flex-1">
              <h3 className='text-blue-600'>Email: <span className='font-light'>
                <a href="mailto:markcoffiekenneth@gmail.com" className='text-blue-600'>
                  markcoffiekenneth@gmail.com
            </a>
              </span>
              </h3>

              <div className='mt-3 flex flex-col'>
                <label htmlFor="subject" className="text-gray-700">Subject</label>
                <input className=" outline-none focus:bg-white bg-gray-100 placeholder-gray-500 border p-3 w-64 w-full" name='subject' id='subject' placeholder="Website dev" />
              </div>

              <div className='mt-3 flex flex-col'>
                <label htmlFor="name" className="text-gray-700">Name</label>
                <input className="outline-none focus:bg-white bg-gray-100 placeholder-gray-500 border p-3 w-full" placeholder="Jane Doe" name='name' id='name' />
              </div>

              <div className='mt-3 flex flex-col'>
                <label htmlFor="email" className="text-gray-700">Email</label>
                <input className="outline-none focus:bg-white bg-gray-100 placeholder-gray-500 border p-3 w-full" placeholder="jane@example.com" name='email' required type='email' id='email' />
              </div>
            </div>
            <div className="flex-1">
              <div className=' flex-col flex-1 sm:p-2'>
                <div className="mt-12 w-full self-center mx-auto">
                  <div className='flex-col w-full'>
                    <label htmlFor="message" className="text-gray-700">Message</label>
                    <textarea className="outline-none focus:bg-white bg-gray-100 placeholder-gray-500 border p-3 w-full" rows="8.5" placeholder="I need a website" required type='message' id='message' />
                  </div>
                </div>
                <div className='mt-3 flex flex-col'>
                  <button className="p-3 bg-yellow-600 my-3 outline-none" type='submit'>Send</button>
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>





    </Layout>

  );
}
