import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import { extraProjects, topProjects } from '../info/projects';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Projecst() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    lazyLoad: true,
  };

  return (
    <Layout>
      <SEO title="Projects" />
      <h1 className='text-gray-800'>Top Projects</h1>

      <Slider {...settings}  >
        {topProjects.map((project, idx) => (
        <div key={idx}>
          <div  className='flex-col  content-around m-3 bg-gray-900 rounded-lg shadow p-3 h-full' style={{ minHeight: 350, maxHeight: 420, background:project.color }} >
            <h2 className='flex capitalize text-white text-center'>{project.name} </h2>
            <p className='text-gray-100  '>{project.description}</p>
            <button className="self-end px-6 py-1 rounded text-gray-600 bg-white outline-none  focus:outline-none hover:shadow-xl">
              <a href={project.link} target='_blank' rel="noopener noreferrer"> View</a>
            </button>
          </div>
          </div>
        ))}
      </Slider>


      <div>
        <h1 className='text-gray-800 '>More...</h1>
        {extraProjects.map((project, idx) => (
          <div className="bg-gray-800 rounded  w-full p-3 shadow-2xl my-4" key={idx} data-sal="slide-down" data-sal-delay="200"
            data-sal-easing="ease" >
            <div className="flex justify-between">
              <h2 className='capitalize text-white'>{project.name} </h2>
              <button className="px-6 py-0 h-8 rounded text-gray-100 bg-gray-900 outline-none ml-2 focus:outline-none hover:shadow-xl">
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
