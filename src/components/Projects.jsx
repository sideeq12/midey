import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "OpenStore",
      description: "A modern e-commerce platform with real-time inventory tracking and seamless payment integration. Features include user authentication, product management, and analytics dashboard.",
      image: "/very.jpg",
      link: "#",
      languages: ["React", "Node.js", "MongoDB", "Express"],
      category: "E-commerce Development"
    },
    {
      title: "Deep Learning Hub",
      description: "An interactive platform for AI enthusiasts to experiment with deep learning models. Includes real-time model training visualization and collaborative features.",
      image: "/project2.jpg",
      link: "#",
      languages: ["Python", "TensorFlow", "React", "FastAPI"],
      category: "AI Development"
    },
    {
      title: "Optimistic Properties",
      description: "A real estate platform with virtual tour capabilities and advanced property filtering. Integrated with mapping services and automated valuation models.",
      image: "/project3.jpg",
      link: "#",
      languages: ["Next.js", "Three.js", "Prisma", "PostgreSQL"],
      category: "Real Estate Platform"
    },
    {
      title: "Portfolio 3D",
      description: "A creative portfolio website with immersive 3D elements and smooth animations. Features interactive project showcases and dynamic content loading.",
      image: "/project4.jpg",
      link: "#",
      languages: ["React", "Three.js", "GSAP", "TailwindCSS"],
      category: "Personal Website"
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with real-time data visualization and customizable reporting features. Supports multiple data sources and export formats.",
      image: "/project5.jpg",
      link: "#",
      languages: ["Vue.js", "D3.js", "Node.js", "Firebase"],
      category: "Dashboard Design"
    },
    {
      title: "Sportster",
      description: "A fitness tracking application with personalized workout plans and nutrition monitoring. Includes social features and progress tracking.",
      image: "/project6.jpg",
      link: "#",
      languages: ["React Native", "Redux", "Node.js", "MongoDB"],
      category: "Fitness Application"
    }
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-[#0A0A0F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center md:text-left mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Some of My Featured Works
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto md:mx-0"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <a 
              href={project.link}
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                  <span className="px-2 sm:px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-blue-400 border border-blue-500/20 whitespace-nowrap">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.languages.map((lang, langIndex) => (
                    <span
                      key={langIndex}
                      className="px-2 py-0.5 sm:py-1 bg-gray-700/30 rounded-md text-xs text-gray-300 whitespace-nowrap"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="flex items-center text-sm text-blue-400 group-hover:text-blue-300 transition-colors mt-auto">
                  <span className="text-xs sm:text-sm">View Project</span>
                  <svg 
                    className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 