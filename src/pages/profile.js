import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"

export default function Profiles() {
  return (
    <Layout>
      <SEO title="Profile" />
      <div className="flex justify-between">
        <div className=" flex-1">
          <h1 className='text-4xl'>About Me</h1>
          <p className='text-xl text-gray-600 leading-snug'>
            I’m Kenny Mark, currently a Software Engineer for Trelleborg Marine Systems and formerly a University of Chester graduate. I graduated with a Computer Science degree in CompSci but the web (front-end & backend) is where I live. I love everything about UI design and UX on the web. I have worked on several projects including this website. I also develop and design mobile apps with React Native.
          </p>
          <p className='text-xl mt-2 text-gray-600 leading-snug'>
            I actively spend many hours per day working on my side projects which can be found on github code. I have developed applications for mobile, desktop and web both in their native languages or using cross-platform solutions. Software development aside, I am also heavily invested in the creation and nurturing of ideas that are used by the masses. I incline to be entrepreneurial at times and product design would be an area I would love to explore and competent at. I see beyond code and design.
          </p>
        </div>

        <div  className='flex-1  rounded-lg h-64 w-full '>
        </div>
      </div>
    </Layout>
  );
}
