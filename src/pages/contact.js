import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"

export default function Contact() {
  return (

    <Layout>
      <SEO title="Contact" />
      <div className="flex-row lg:flex  justify-between p-3" data-sal='fade' data-sal-duration='400'>
        <div className=' flex flex-1 mt-5 rounded-lg shadow-base mr-3' >
          <form action="#" method="post" className="self-start mx-auto w-full ">

            <div className='mt-3 flex flex-col'>
              <label htmlFor="subject" className="text-gray-700">Subject</label>
              <input className="placeholder-gray-500 border p-3 w-64 w-full" name='subject' id='subject' placeholder="Website dev" />
            </div>

            <div className='mt-3 flex flex-col'>
              <label htmlFor="name" className="text-gray-700">Name</label>
              <input className="placeholder-gray-500 border p-3 w-full" placeholder="Jane Doe" name='name' id='name' />
            </div>

            <div className='mt-3 flex flex-col'>
              <label htmlFor="email" className="text-gray-700">Email</label>
              <input className="placeholder-gray-500 border p-3 w-full" placeholder="jane@example.com" name='email' required type='email' id='email' />
            </div>
          </form>
        </div>

        <div className=' flex-col flex-1 mt-5 sm:p-2'>
          <div className=" w-full self-center mx-auto">
            <div className='flex-col w-full'>
              <label htmlFor="message" className="text-gray-700">Message</label>
              <textarea className="placeholder-gray-500 border p-3 w-full" rows="9" placeholder="I need a website" required type='message' id='message' />
            </div>
          </div>
          <div className='mt-3 flex flex-col'>
              <button className="p-3 bg-yellow-600 my-3 outline-none">Send</button>
            </div>
        </div>

      </div>

    </Layout>

  );
}
