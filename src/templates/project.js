import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { startCase, upperFirst } from 'lodash'
import { Img } from 'react-image'


export default function Project(props) {
  const { pageContext: { project } } = props
  return (
    <Layout>
      <SEO title="Project" />
      <h1 className='font-semibold text-center text-4xl mb-3'>{startCase(project.name)}</h1>
      <p className='text-center text-gray-500'>{upperFirst(project.description)}</p>


      <div className='flex mx-auto mt-4 rounded-lg shadow-lg p-12 w-4/6'
        style={{ backgroundColor: project.color, maxHeight: 500 }}>
        <Img src={project.image} className='mx-auto self-center rounded-lg shadow' style={{ maxHeight: 450 }} />
      </div>

    </Layout>
  )
}
