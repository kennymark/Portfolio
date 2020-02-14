import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import email from '../images/email.svg'


export default function Contact() {
  const imgStyle = {
    position: 'fixed',
    zIndex: -6,
    opacity: 0.8,
    height: 149,
    top: '55%',
    transform: 'translateX(50%)'
  }


  return (
    <Layout>
      <SEO title="Contact" />
      <img src={email} style={imgStyle} className='' alt='front end ' height='50' />
      <div className="p-3" data-sal='fade' data-sal-duration='400' style={{ zIndex: 21 }}>

        <form action="https://getform.io/f/c4f252bb-d674-4113-9ff6s-1a280733fed3" method="post" className="flex-row "
          data-netlify='true'>

          <div className="flex-row lg:flex">
            <div className="flex-1 lg:p-3">
              <h3 className='text-blue-600'>Email: <span className='font-light'>
                <a href="mailto:markcoffiekenneth@gmail.com" className='text-blue-600'>
                  markcoffiekenneth@gmail.com
                </a>
              </span>
              </h3>

              <div className='mt-3 flex flex-col'>
                <label htmlFor="subject" className="text-gray-700 my-1">Subject</label>
                <input className=" outline-none focus:bg-white bg-gray-100 placeholder-gray-500 border p-3 w-64 w-full" name='subject' id='subject' placeholder="Website dev" />
              </div>

              <div className='mt-3 flex flex-col'>
                <label htmlFor="name" className="text-gray-700 my-1">Name</label>
                <input className="outline-none focus:bg-white bg-gray-100 placeholder-gray-500 border p-3 w-full" placeholder="Jane Doe" name='name' id='name' />
              </div>

              <div className='mt-3 flex flex-col'>
                <label htmlFor="email" className="text-gray-700 my-1">Email</label>
                <input className="outline-none focus:bg-white bg-gray-100 placeholder-gray-500 border p-3 w-full" placeholder="jane@example.com" name='email' required type='email' id='email' />
              </div>
            </div>

            <div className="flex-1 lg:mt-9 lg:p-3 sm:mt-10">
              <label htmlFor="message" className="text-gray-700">Message</label>
              <textarea className="outline-none focus:bg-white bg-gray-100 placeholder-gray-500 border p-3 w-full mt-1" rows="9" placeholder="I need a website" required name='message' id='message' />

              <div className='mt-3 flex flex-col'>
                <button className="p-3 bg-yellow-400 my-3 outline-none" type='submit'>Send</button>
              </div>
            </div>

          </div>

        </form>
      </div>





    </Layout>

  );
}
