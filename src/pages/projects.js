import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo";
import { extraProjects, topProjects } from '../data/projects';
import Masonry from 'react-masonry-css'
import { Img } from 'react-image'
import slug from 'slug'
import { Link } from "gatsby"

export default function Projects() {

  return (
    <Layout largeContainer>
      <SEO title="Projects" />
      <h1 className='text-gray-800 lg:text-left sm:text-center mb-2 text-2xl sm:text-center ml-1 dark:text-gray-400'>Top Projects</h1>
      <Masonry
        breakpointCols={{ default: 3, 800: 2, 600: 1 }}
        className="my-masonry-grid relative"
        columnClassName="my-masonry-grid_column">
        {topProjects.reverse().map((project, idx) => (
          <div style={{ background: project.color }} className='rounded-lg p-5 m-2 cursor-pointer relative proj hover:shadow-2xl' key={idx}>

            <h2 className='capitalize text-center text-normal mb-3 text-black font-semibold text-gray-700 '>{project.name} </h2>
            <Img src={project.image} alt={project.name} className='rounded shadow-lg ' />

            <Link to={`project/${slug(project.name)}`} className='rounded-lg'>
              <div
                className="w-full h-full absolute flex flex-col justify-center items-center p-4 desc"
                style={{ bottom: 0, borderRadius: 'inherit', right: 0, backgroundColor: project.color }}>

                <div className="text-black text-center text-md mb-5 mx-auto leading-wide ">{project.description}</div>

              </div>
            </Link>

          </div>

        ))}
      </Masonry>


      <div className="flex-col py-8">
        <h1 className='text-gray-800 px-3 text-2xl mt-10 dark:text-gray-400'>More...</h1>
        {extraProjects.map((project, idx) => (
          <div className="bg-gray-200 rounded p-3 mt-4 mx-3 dark:bg-gray-700" key={idx} data-sal="slide-down" data-sal-delay="200"
            data-sal-easing="ease" >
            <div className="flex justify-between">
              <h2 className='capitalize text-gray-600 dark:text-gray-900'>{project.name} </h2>

              <a href={project.link} target='_blank' rel="noopener noreferrer"
                className='px-4 py-1 rounded text-sm bg-white ml-2 focus hover:bg-gray-600 hover:text-white dark:bg-gray-900'>
                View
              </a>
            </div>
            <p className='text-gray-600 w-4/5 normal-case dark:text-gray-600'>{project.description}</p>
          </div>
        ))}
      </div>

    </Layout>
  );
}
