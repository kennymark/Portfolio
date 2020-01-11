import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* border-4 border-black  */}
    <div className="flex-row lg:flex  p-3">
      <div className=" flex-1" data-sal='slide-right' data-sal-duration='800'>
        <h1 className='text-6xl leading-none text-gray-800'>
          Hi there... <br /> I build on the web</h1>
        <p className='text-lg text-gray-600'> JavaScript front-end & back-end developer</p>
        <p className='text-lg text-gray-600'> Chester, England</p>

        <button className="btn shadow-sm mt-5 bg-yellow-400 p-4 text-black focus:outline-none hover:shadow-xl">Contact Me</button>

      </div>

      <div data-sal='slide-left' data-sal-duration='500' className=' flex flex-1 justify-center mt-5 bg-yellow-400 rounded-lg  w-full shadow-xl' style={{ minHeight: 550 }}>
        <div className='self-center mt-5 bg-white rounded-lg shadow-2xl ' style={{ minHeight: 400, width: '70%', marginTop: 80 }}>
          <button className='flex-1 self-end mt-5 bg-yellow-500 w-25 m-5 p-3 focus:outline-none hover:shadow-xl'>
            Portfolio
          </button>
        </div>
      </div>

    </div>


  </Layout >
)

export default IndexPage
