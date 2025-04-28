import React, { useState, useEffect } from 'react'

const SideMenu = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    } else {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  }, [darkMode])

  return (
    <nav className="fixed top-6 right-6 z-50">
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-end md:items-center">
        <li>
          <a href="#projects" className="text-white text-base md:text-lg font-medium tracking-wide relative after:content-[''] after:block after:h-0.5 after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-blue-400 transition-colors duration-200 px-1">
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" className="text-white text-base md:text-lg font-medium tracking-wide relative after:content-[''] after:block after:h-0.5 after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-blue-400 transition-colors duration-200 px-1">
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white text-base md:text-lg font-medium tracking-wide relative after:content-[''] after:block after:h-0.5 after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-blue-400 transition-colors duration-200 px-1">
            Contact
          </a>
        </li>
        <li>
          <a 
            href="/WAHEED_SODIQ_Resume.docx" 
            download
            className=" text-white text-base md:text-lg font-medium md:-mt-6 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </li>
        {/* <li>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode((prev) => !prev)}
            className={`w-12 h-6 flex items-center rounded-full px-1 transition-colors duration-300 border border-gray-600 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
          >
            <span
              className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'bg-blue-500 translate-x-6' : 'bg-yellow-400 translate-x-0'}`}
            />
          </button>
        </li> */}
      </ul>
    </nav>
  )
}

export default SideMenu 