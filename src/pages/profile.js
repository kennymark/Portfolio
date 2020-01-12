import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"

export default function Profiles() {
  return (
    <Layout>
      <SEO title="Profile" />

      <div className="flex-col lg:flex p-3 justify-between sm:w-5/6 mx-auto tracking-wide" data-sal='fade' data-sal-duration='400'>
        <h1 className='text-4xl text-center'>About Me</h1>
        <p className='text-xl text-gray-600 leading-snug'>
          I’m Kenny Mark, currently a Software Engineer for SABS Travel Technologies. I am front-end focused developer with full stack experience. With a total of 5 years of experience, 3 years freelancing,studying and building hobby projects and 2 years commercial I have worked on every kind of application be it small, medium or very large enterprise application. I love everything UI and UX on the web but I have also worked on developed mobile applications, web apps and some backend applications.
          </p>
        <p className='text-xl mt-2 text-gray-600 leading-snug'>
          I actively spend many hours per day working on my side projects which can be found on 
          <mark> <a href="https://github.com/kennymark" target="_blank" rel="noopener noreferrer" >github</a></mark>. Software development aside, I am also heavily invested in the creation and nurturing of ideas that are used by the masses. I incline to be entrepreneurial at times and product design would be an area I would love to explore and competent at. I see beyond code and design.
          </p>
      </div>
    </Layout>
  );
}
