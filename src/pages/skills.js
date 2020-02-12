import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import frontend from './../images/front-end.svg'
import back from '../images/backend.svg'
import db from '../images/database.svg'
import devop from '../images/devops.svg'
import extras from '../images/extras.svg'
import { Link } from "gatsby";

export default function Skills() {
  const skillTypes = {
    frontend: [
      "HTML", "CSS/SASS", "CSS Frameworks", "React, Angular, Vue", "JQuery,JavaScript/ES6+", "Responsive Design", "Typescript",
    ],
    backend: [
      "Backend MVC with NodeJS", "ExpressJs/KoaJs", "Authentication / Authorization",
      "Templating with hbs, ejs", "RESTFUL API Design/Dev", "GraphQL Server",
      "NPM, Nodejs, Gulp etc."
    ],
    databases: ["MsSQL", "MySQL", "MongoDB", "Data modelling", "Normalization"],
    devops: ["AWS EC2/S3", "Google  Cloud", "Git", "APIs", "CI/CD", "Testing (Unit, Integration)"],
    extras: ["App design with Adobe XD", "App dev with React Native",
      "Project management with Jira, Confluence, Git etc.", "Cross-browser dev/testing", "Agile (SCRUM)",
    ]

  }

  const skillClasses = 'flex-1 bg-gray-800 mt-5 border rounded-lg sm:w-full shadow-lg m-3 px-6 pb-3'
  const svgImg = {
    zIndex: 10,
    float: 'right',
    maxWidth: 350,
    height: 300,
    opacity: 0.05,
    position: 'absolute'
  }
  return (

    <Layout>

      <SEO title="Skills" />
      <a href='../assets/KennyCV.pdf' target='_blank' className="ml-3 rounded shadow-sm bg-yellow-400 p-3 text-gray-700 hover:shadow-xl hover:text-black">View CV</a>
      <div className="flex-row lg:flex" data-sal="slide-down" data-sal-delay="200">
        <div className={skillClasses}>

          <div className="img-container">
            <img src={frontend} style={svgImg} />
          </div>

          <h1 className="text-3xl text-center text-gray-200 mt-3">Front-end</h1>
          <ul className="self-center mx-auto text-gray-200 p-6" >
            {skillTypes.frontend.map((skill, i) => <li key={i} className='my-1 text-lg'> {skill}</li>)}
          </ul>
        </div>

        <div className={skillClasses}  >

          <div className="img-container">
            <img src={back} style={svgImg} />
          </div>

          <h1 className=" text-3xl text-center text-gray-200 mt-3">Back-end</h1>
          <ul className="justify-center  mx-auto text-gray-200 p-6">
            {skillTypes.backend.map((skill, i) => <li key={i} className='my-1 text-lg'>{skill}</li>)}
          </ul>
        </div>

        <div className={skillClasses}  >

          <div className="img-container">
            <img src={db} style={svgImg} />
          </div>

          <h1 className="text-3xl text-center text-gray-200 mt-3">Database</h1>
          <ul className="self-center w-3/4 mx-auto text-gray-200 p-6">
            {skillTypes.databases.map((skill, i) => <li key={i} className='my-1 text-lg'>{skill}</li>)}
          </ul>
        </div>

      </div>

      <div className="flex-row lg:flex mt-5" data-sal="slide-down" data-sal-delay="350">
        <div className={skillClasses}>

          <div className="img-container">
            <img src={devop} style={svgImg} />
          </div>

          <h1 className='text-3xl text-center text-gray-200 mt-3'>Devops</h1>
          <ul className="self-center mx-auto  text-gray-200 p-6" >
            {skillTypes.devops.map((skill, i) => <li key={i} className='my-1 text-lg'>{skill}</li>)}
          </ul>
        </div>

        <div className={skillClasses}>

          <div className="img-container" style={{ height: 'inherit', width: 'inherit' }}>
            <img src={extras} style={svgImg} />
          </div>

          <h1 className='text-3xl text-center text-gray-200 mt-3'>Extras</h1>
          <ul className="self-center mx-auto text-gray-200 p-6" >
            {skillTypes.extras.map((skill, i) => <li key={i} className='my-1 text-lg'>{skill}</li>)}
          </ul>
        </div>

      </div>
    </Layout>

  );
}
