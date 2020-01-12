import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import { extraProjects, topProjects } from '../info/projects';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    className: 'w-full',
    centerMode: true,
    centerPadding: "60px",
    focusOnSelect: false,
    swipeToSlide: true,

  };

  const showPage = (e) => {
    e.stopPropagation()
    console.log(e.target)
  }

  const removePage = (e) => {
    e.stopPropagation()
    console.log(e.target)
  }

  return (
    <Layout>
      <SEO title="Projects" />
      <h1 className='text-gray-800'>Top Projects</h1>
      <Slider {...settings}  >
        {topProjects.map((project, idx) => (
          <div key={idx}>
            <div className='flex-col content-between m-3 bg-gray-900 rounded-lg shadow p-3 h-full' role='{role}' onMouseEnter={showPage}
              onMouseLeave={removePage}
              style={{ minHeight: 300, maxHeight: 320, background: project.color }} >
              <h2 className='flex justify-center capitalize text-white'>{project.name} </h2>
              <img src={project.image} alt='' className='object-contain h-48 w-full opacity-75' />

              {/* <div className='flex-1 absolute bg-black m-3 top-0 mx-auto bg-gray-900 rounded-lg p-3' style={{ width: 360, minHeight: 'inherit' }}>
                <p className='text-gray-100 '>{project.description}</p>
                <button className="self-end px-6 py-1 rounded text-gray-600 bg-white outline-none mr-2 focus:outline-none hover:shadow-xl">
                  <a href={project.link} target='_blank' rel="noopener noreferrer"> View</a>
                </button>
                <button className="self-end px-6 py-1 rounded text-gray-600 bg-white outline-none  focus:outline-none hover:shadow-xl">
                  <a href={project.github} target='_blank' rel="noopener noreferrer"> Source Code</a>
                </button>
              </div> */}

            </div>
          </div>
        ))}
      </Slider>


      <div>
        <h1 className='text-gray-800 '>More...</h1>
        {extraProjects.map((project, idx) => (
          <div className="bg-gray-800 rounded p-3 shadow-2xl my-4" key={idx} data-sal="slide-down" data-sal-delay="200"
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
