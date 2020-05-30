import React, { useEffect, useState } from 'react'
import Sun from '../images/sun.svg'
import Moon from '../images/moon.svg'


function Darkmode() {
  const [isDark, setIsDark] = useState(false)
  // const theme = window.localStorage.getItem('color')

  useEffect(() => {
    // window.localStorage.setItem('theme', 'light')
    toggleIsDark()
    console.log({ uni: document.styleSheets })

  }, [])

  function toggleIsDark() {
    // if (window?.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   // dark mode
    // }
    setIsDark(!isDark)
  }

  return (
    <div className='mr-4'>
      {isDark ?
        <img src={Sun} className='h-6 w-6 cursor-pointer dark:fill-current' onClick={toggleIsDark} />
        :
        <img src={Moon} className='h-6 w-6 cursor-pointer dark:fill-current' onClick={toggleIsDark} />
      }
    </div>
  )
}

export default Darkmode
