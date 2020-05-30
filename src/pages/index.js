import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { topProjects } from '../data/projects';
import { Link } from "gatsby";
import { Img } from 'react-image'



const IndexPage = () => {
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'w-full  mx-auto flex-1',
    fade: true,
    autoplay: true,
    arrows: false,
    dots: true
  };

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex-row  lg:flex p-3">
        <div className=" flex-1 self-center" data-sal='slide-right' data-sal-duration='300'>
          <h1 className='text-6xl leading-none text-gray-800 my-6 leading-6 '>
            Hi there... <br /> I build on the web</h1>
          <p className='text-lg text-gray-600'> JavaScript front-end & back-end developer</p>
          <p className='text-lg text-gray-600'> Chester, England</p>

          <div className="btn mt-10">
            <Link to='/contact' className="shadow-sm bg-yellow-400 p-3 text-gray-800 hover:shadow-xl hover:text-black mr-3">Contact Me</Link>
          </div>
        </div>

        <div data-sal='slide-left' data-sal-duration='300' className='flex flex-1 justify-center mt-5 bg-yellow-400 rounded-lg  w-full shadow-xl' style={{ minHeight: 550 }}>

          <div className='flex-col self-center mt-5 bg-gray-200 rounded-lg shadow-2xl ' style={{ minHeight: 400, width: '80%', maxWidth: 500 }}>
            <Slider {...settings}>
              {topProjects.map((project, key) => (
                <div className='w-11/12' key={key}>
                  <Img src={project.image} alt='' className='object-contain w-full rounded ' style={{ height: 350 }} />
                  <p className='flex-1 text-center mt-3 bg-yellow-500 w-25 m-5 p-2 capitalize '>
                    {project.name}
                  </p>
                </div>
              ))}
            </Slider>

          </div>
        </div>


      </div>
    </Layout >
  )
}

export default IndexPage