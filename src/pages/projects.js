import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Layout from '../components/layout';
import SEO from "../components/seo";
import { extraProjects, topProjects } from '../info/projects';
// import ReactCardFlip from 'react-card-flip';

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
    verticalMode: true,
    responsive: [
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false, }
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 }
      },
    ]
  };


  return (
    <Layout>
      <SEO title="Projects" />
      <h1 className='text-gray-800 lg:text-left sm:text-center mx-3 text-2xl'>Top Projects</h1>
      <Slider {...settings} data-sal='fade' data-sal-delay="100" data-sal-easing="ease" data-sal-duration='600' >
        {topProjects.map((project, idx) => (

          <div className='cursor-pointer' key={idx}>
            <div className='flex-col content-between m-3 rounded-lg shadow p-3 h-full proj '
              style={{ background: project.color }} >
              <h2 className='flex justify-center capitalize text-white'>{project.name} </h2>
              <img src={project.image} alt='' className='object-contain h-48 w-full opacity-75' />


              <div className='flex-col items-center  m-3 rounded-lg p-3 proj-description'
                style={{ backgroundImage: project.color, backgroundColor: 'rgba(0,0,0,.4)', backgroundBlendMode: 'color' }} >
                <p className="text-gray-100 text-md ">{project.description}</p>
                <div className="buttons mt-10">
                  <button className=" px-6 py-1 rounded text-gray-600 bg-white outline-none mr-2 focus:outline-none hover:shadow-xl">
                    <a href={project.link} target='_blank' rel="noopener noreferrer"> View</a>
                  </button>
                  <button className=" px-6 py-1 rounded text-gray-600 bg-white outline-none  focus:outline-none hover:shadow-xl">
                    <a href={project.github} target='_blank' rel="noopener noreferrer"> Github</a>
                  </button>
                </div>

              </div>


            </div>
          </div>

        ))}
      </Slider>


      <div className="flex-col">
        <h1 className='text-gray-800 px-3 text-2xl mt-10'>More...</h1>
        {extraProjects.map((project, idx) => (
          <div className="bg-gray-800 rounded p-3 shadow-2xl my-2 mx-3" key={idx} data-sal="slide-down" data-sal-delay="200"
            data-sal-easing="ease" >
            <div className="flex justify-between">
              <h2 className='capitalize text-gray-300'>{project.name} </h2>
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
