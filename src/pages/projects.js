import React from 'react';
// import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Layout from '../components/layout';
import SEO from "../components/seo";
import { extraProjects, topProjects } from '../data/projects';
// import { carouselSettings } from '../data/data';
import Masonry from 'react-masonry-css'



export default function Projects() {

  const viewProject = (project) => {
    console.log(project)
  }



  return (
    <Layout>
      <SEO title="Projects" />
      <h1 className='text-gray-800 lg:text-left sm:text-center mb-2 text-2xl sm:text-center '>Top Projects</h1>
      <Masonry
        breakpointCols={{ default: 2, 800: 1 }}
        className="my-masonry-grid relative"
        columnClassName="my-masonry-grid_column">
        {topProjects.reverse().map((project, idx) => (
          <div style={{ background: project.color }} className='rounded-lg p-5 shadow m-2 cursor-pointer relative'>
            <h2 className='capitalize text-center text-lg mb-2 text-gray-900'>{project.name} </h2>

            <img src={project.image} alt='' className='rounded' />

            <div className="bg-gray-700 w-full  h-full absolute flex flex-col justify-center items-center mt-4 p-4"
              style={{ bottom: 0, borderRadius: 'inherit', right: 0 }}>

              <p className="text-gray-100 text-md mb-5 ">{project.description}</p>

              <button>
                <a href={project.link} target='_blank' rel="noopener noreferrer" className=' px-6 py-2 rounded text-gray-600 bg-white mr-2  hover:bg-black hover:text-gray-100'> View</a>

                <a href={project.github} target='_blank' rel="noopener noreferrer" className='px-6 py-2 rounded text-gray-600 bg-white hover:bg-black hover:text-gray-100'> Github</a>
              </button>

            </div>
          </div>

        ))}
      </Masonry>
      {/* <Slider {...carouselSettings} data-sal='fade' data-sal-delay="100" data-sal-easing="ease" data-sal-duration='600' >
        {topProjects.map((project, idx) => (

          <div className='cursor-pointer' key={idx} onClick={() => viewProject(project)}>
            <div className='flex-col content-between m-3 rounded-lg shadow p-3 h-full proj '
              style={{ background: project.color }} >
              <h2 className='flex justify-center capitalize text-white'>{project.name} </h2>
              <img src={project.image} alt='' className='object-contain h-48 w-full opacity-75' />


              <div className='flex-col items-center  m-3 rounded-lg p-10 proj-description'
                style={{ backgroundImage: project.color, backgroundColor: 'rgba(0,0,0,.5)', backgroundBlendMode: 'color' }} >
                <p className="text-gray-100 text-md ">{project.description}</p>

                <div className="buttons mt-10">
                  <a href={project.link} target='_blank' rel="noopener noreferrer" className=' px-6 py-2 rounded text-gray-600 bg-white mr-2  hover:bg-black hover:text-gray-100'> View</a>

                  <a href={project.github} target='_blank' rel="noopener noreferrer" className='px-6 py-2 rounded text-gray-600 bg-white hover:bg-black hover:text-gray-100'> Github</a>
                </div>

              </div>

            </div>
          </div>

        ))}
      </Slider> */}


      <div className="flex-col">
        <h1 className='text-gray-800 px-3 text-2xl mt-10'>More...</h1>
        {extraProjects.map((project, idx) => (
          <div className="bg-gray-800 rounded p-3 shadow-md my-4 mx-3" key={idx} data-sal="slide-down" data-sal-delay="200"
            data-sal-easing="ease" >
            <div className="flex justify-between ">
              <h2 className='capitalize text-gray-300'>{project.name} </h2>

              <a href={project.link} target='_blank' rel="noopener noreferrer" className=' px-6 py-1 rounded text-sm text-gray-100 bg-black ml-2 focus hover:bg-white hover:text-black'> View</a>

            </div>
            <p className='text-gray-500 w-4/5 normal-case'>{project.description}</p>
          </div>
        ))}
      </div>

    </Layout>
  );
}
