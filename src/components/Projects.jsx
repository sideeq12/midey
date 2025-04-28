import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Bloodhero",
      description: "A platform designed to seamlessly connect blood donors and recipients within their local communities for faster, direct assistance",

      image: "/bloodhero.png",
      link: "https://bh-seven.vercel.app/",
      languages: ["React", "Node.js", "MongoDB", "Express"],
      category: "Community assistive tool"
    },
    {
      title: "Linkages",
      description: "An inter-university file-sharing platform with role-based access control, supporting file upload, download, view-only permissions, and admin-level management.",
      image: "/linkage.png",
      link: "https://project-linkage.vercel.app/",
      languages: [ "Nodejs", "React", "Firebase"],
      category: "University : Educational tool"
    },
    {
      title: "Halal Baqqal",
      description: "A centralized platform for discovering ethical businesses and services within local communities.",
      image: "/baqqal.png",
      link: "https://halalbaqqal-psi.vercel.app/",
      languages: ["Next.js", "Prisma", "PostgreSQL"],
      category: "Business Platform"
    },
    {
      title: "Venworld Global ",
      description: "Digital Marketing agency handling for scaling projects from ideation to execution fast withing digital world.",
      image: "/vn.png",
      link: "https://venworld.vercel.app/",
      languages: ["React", "TailwindCSS"],
      category: "Marketing Website"
    },
    {
      title: "Fleevidoe",
      description: "A display latest video showing on streaming platforms with a focus on user experience and performance.",
      image: "/fleevud.png",
      link: "https://fleevid.vercel.app/",
      languages:["React", "TailwindCSS"],
      category: "Personal Design"
    },
    {
      title: "Tritez",
      description: "An ecomerce platform designed to seamlessly connect local businesses and customers for faster, direct assistance.",
      image: "/tritez.png",
      link: "https://quick-mail-chat.vercel.app/",
      languages: ["React", "Redux", "Node.js", "MongoDB"],
      category: "Ecomerce Application"
    }
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 text-left bg-[#0A0A0F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center md:text-left mb-12 md:mb-16 px-6 md:px-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Some of My Featured Works
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto md:mx-0"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 p-6 md:p-12 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <a 
            target='_blank'
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
                  className="w-full h-full object-fill transform group-hover:scale-110 transition-transform duration-500"
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