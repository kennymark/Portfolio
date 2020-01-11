import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"

export default function Skills() {
  const frontEnd = [
    "HTML", "CSS/SASS", "JQuery", "React, Angular, Vue", "JavaScript/ES6+", "Ajax & Rest API's",
    "Responsive Design", "Typescript",
  ]

  const backend = [
    "Backend MVC with Node", "API dev in Expressjs/KoaJs", "Authentication / Authorization",
    "Templating with hbs, ejs", "MSsql, SQL, MongoDB", "Schema Design", "RESTFUL API Design",
    "NPM, Nodejs, Gulp etc."
  ]

  const extra = ["App design with Adobe XD", "App dev with React Native",
    "Project management with Jira, Confluence, Git etc.", "TDD, Unit & Integration testing",
    "Oh, I speak like 7 languages too", "Cross-browser dev/testing", "Agile (SCRUM)", "AWS EC2/S3",
  ]
  
 
  return (

    <Layout>
      <SEO title="Home" />

      <div className="flex-row lg:flex mt-5 ">

        <div id="portfolio " className='m-4 flex-1 mt-5 bg-gray-900 rounded-lg w-full shadow-xl m-3 px-6 pb-3' data-sal='zoom-in' data-sal-delay='200' data-sal-easing='ease'>
          <h1 className="text-3xl text-center text-gray-200">Front-end</h1>
          <ul className="self-center mx-auto text-gray-400 p-6">
            {frontEnd.map((skill, i) => <li key={i} className='my-1 text-lg'> {skill}</li>)}
          </ul>
        </div>

        <div id="portfolio " className='flex-1 mt-5 bg-gray-900 rounded-lg w-full shadow-xl m-3 px-6 pb-3' data-sal='zoom-in' data-sal-delay='220' data-sal-easing='ease' >
          <h1 className=" text-3xl text-center text-gray-200">Back-end</h1>
          <ul className="self-center mx-auto text-gray-400 p-6">
            {backend.map((skill, i) => <li key={i} className='my-1 text-lg'>{skill}</li>)}
          </ul>
        </div>

        <div id="portfolio " className='flex-1 mt-5 bg-gray-900 rounded-lg w-full shadow-xl m-3 px-6 pb-3' data-sal='zoom-in' data-sal-delay='250' data-sal-easing='ease' data-sal-duration='200'>
          <h1 className="text-3xl text-center text-gray-200">Extra</h1>
          <ul className="self-center mx-auto text-gray-400 p-6">
            {extra.map((skill, i) => <li key={i} className='my-1 text-lg'>{skill}</li>)}
          </ul>
        </div>
      </div>



    </Layout>

  );
}
