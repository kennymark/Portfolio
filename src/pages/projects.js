import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import { extraProjects, topProjects } from '../info/projects';


export default function Projects() {



  return (
    <Layout>
      <SEO title="Projects" />
      <h1 className='text-gray-800'>Top Projects</h1>
      <div className="flex justify-center overflow-scroll">

        {topProjects.map((project, idx) => (
          <div className='flex-1 m-3 bg-gray-900 rounded-lg shadow-xl p-3' style={{ maxHeight: 420, minWidth: 420 }}>
            <h2 className='capitalize text-white text-center'>{project.name} </h2>

            <p className='text-gray-500  '>{project.description}</p>

            {/* <img src={project.image} alt="" className='object-contain w-full' style={{ height: '100%' }} /> */}
          </div>
        ))}


      </div>

      <div>
        <h1 className='text-gray-800 '>More...</h1>
        {extraProjects.map((project, idx) => (
          <div className="bg-gray-800 rounded  w-full p-3 shadow-2xl my-4" key={idx} data-sal="slide-down" data-sal-delay="500"
            data-sal-easing="ease">
            <div className="flex justify-between">
              <h2 className='capitalize text-white'>{project.name} </h2>
              <button className="px-6 py-0 rounded text-gray-100 bg-gray-900 outline-none ml-2 focus:outline-none hover:shadow-xl">
                <a href={project.link} target='_blank' rel="noopener noreferrer"> View</a>
              </button>
            </div>
            <p className='text-gray-500 w-4/5 normal-case'>{project.description}</p>
          </div>
        ))}


      </div>


    </Layout>
  );
}
