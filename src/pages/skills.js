import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo";
import { skillTypes } from '../data/data';
import back from '../images/backend.svg';
import db from '../images/database.svg';
import devop from '../images/devops.svg';
import extras from '../images/extras.svg';
import frontend from './../images/front-end.svg';


export default function Skills() {

  const skillClasses = 'flex-1 mt-4 border rounded-lg sm:w-full shadow-md m-3 px-6 pb-3 dark:border-gray-900 dark:shadow-xl'

  const svgbg = {
    backgroundPosition: 'center',
    backgroundBlendMode: 'multiply',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#111721'
  }

  return (
    <Layout>
      <SEO title="Skills" />
      <div className="flex-row lg:flex" data-sal="slide-down" data-sal-delay="200">

        <div className={skillClasses} style={{ backgroundImage: `url(${frontend})`, ...svgbg }}>
          <h1 className="text-2xl text-center text-gray-400 mt-3">Front-end</h1>
          <ul className="self-center mx-auto text-gray-500 p-8 " >
            {skillTypes.frontend.map((skill, i) => <li key={i} className='my-1 text-lg'> {skill}</li>)}
          </ul>
        </div>

        <div className={skillClasses} style={{ backgroundImage: `url(${back})`, ...svgbg }} >
          <h1 className=" text-2xl text-center text-gray-400 mt-3">Back-end</h1>
          <ul className="justify-center  mx-auto text-gray-500 p-8">
            {skillTypes.backend.map((skill, i) => <li key={i} className='my-1 text-lg'>{skill}</li>)}
          </ul>
        </div>

        <div className={skillClasses} style={{ backgroundImage: `url(${db})`, ...svgbg }} >
          <h1 className="text-2xl text-center text-gray-400 mt-3">Database</h1>
          <ul className="self-center w-3/4 mx-auto text-gray-500 p-8">
            {skillTypes.databases.map((skill, i) => <li key={i} className='my-1 text-lg'>{skill}</li>)}
          </ul>
        </div>

      </div>

      <div className="flex-row lg:flex mt-5" data-sal="slide-down" data-sal-delay="350">
        <div className={skillClasses} style={{ backgroundImage: `url(${devop})`, ...svgbg }}>

          <h1 className='text-2xl text-center text-gray-400 mt-3'>Devops</h1>
          <ul className="self-center mx-auto  text-gray-500 p-8" >
            {skillTypes.devops.map((skill, i) => <li key={i} className='my-1 text-lg'>{skill}</li>)}
          </ul>
        </div>

        <div className={skillClasses} style={{ backgroundImage: `url(${extras})`, ...svgbg }}>
          <h1 className='text-2xl text-center text-gray-400 mt-3'>Extras</h1>
          <ul className="self-center mx-auto text-gray-500 p-8" >
            {skillTypes.extras.map((skill, i) => <li key={i} className='my-1 text-lg'>{skill}</li>)}
          </ul>
        </div>

      </div>
    </Layout>

  );
}
