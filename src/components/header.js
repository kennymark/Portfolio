import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [isNavOpen, setNavOpen] = useState(false)
  const pages = [
    { link: '/', name: 'Home' },
    { link: 'profile', name: 'Profile' },
    { link: 'projects', name: 'Projects' },
    { link: 'skills', name: 'Skills' },
    { link: 'contact', name: 'Contact' },
  ]

  const showLinks = () => {
    setNavOpen(!isNavOpen)
  }

  return (
    <>
      <nav className="flex flex-wrap bg-white-500 p-6 border bg-white ">
        <div className="block hidden">
          <button className="flex items-center px-3 py-2 border rounded text-yellow-600 border-yellow-500 hover:text-black hover:border-gray-400 outline-none" onClick={showLinks}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-md text-center lg:flex-grow  lg:flex sm:absolute"  >
            {pages.map((page, key) =>
              <Link to={page.link} key={key} className="lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-700 sm:mr-4 mr-2 "
                activeClassName='text-gray-900 '>
                {page.name}
              </Link>
            )}
          </div>
        </div>

        <div className="hidden sm:flex">

          <a href="https://github.com/kennymark" target="_blank" rel="noopener noreferrer">
            <svg className="sc-bdVaJa fUuvxv" fill="#000" width="30px" height="30px" viewBox="0 0 1024 1024" rotate="0"><path d="M512 64c-247.4 0-448 205.8-448 459.4 0 203 128.4 375 306.4 435.8 2.8 0.6 5.2 0.8 7.6 0.8 16.6 0 23-12.2 23-22.8 0-11-0.4-39.8-0.6-78.2-16.8 3.8-31.8 5.4-45.2 5.4-86.2 0-105.8-67-105.8-67-20.4-53-49.8-67.2-49.8-67.2-39-27.4-0.2-28.2 2.8-28.2 0.2 0 0.2 0 0.2 0 45 4 68.6 47.6 68.6 47.6 22.4 39.2 52.4 50.2 79.2 50.2 21 0 40-6.8 51.2-12 4-29.6 15.6-49.8 28.4-61.4-99.4-11.6-204-51-204-227 0-50.2 17.4-91.2 46-123.2-4.6-11.6-20-58.4 4.4-121.6 0 0 3.2-1 10-1 16.2 0 52.8 6.2 113.2 48.2 35.8-10.2 74-15.2 112.2-15.4 38 0.2 76.4 5.2 112.2 15.4 60.4-42 97-48.2 113.2-48.2 6.8 0 10 1 10 1 24.4 63.2 9 110 4.4 121.6 28.6 32.2 46 73.2 46 123.2 0 176.4-104.8 215.2-204.6 226.6 16 14.2 30.4 42.2 30.4 85 0 61.4-0.6 111-0.6 126 0 10.8 6.2 23 22.8 23 2.4 0 5.2-0.2 8-0.8 178.2-60.8 306.4-233 306.4-435.8 0-253.6-200.6-459.4-448-459.4z"></path></svg>
          </a>
        </div>
      </nav>
    </>
  )
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
