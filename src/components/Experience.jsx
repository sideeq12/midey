import React from 'react'

const Experience = () => {
  const experiences = [
    {
      company: "PMCRG (Pervasive Mobile Computing Laboratory)",
      role: "Frontend Engineer",
      technologies: ["React.js", "TailwindCSS", "Firebase", "Chart.js"],
      period: "June 2024 - Present",
       description: [
        "Worked closely with teams to create a scalable hostel management system, utilizing a JavaScript MVC framework and React.js.",
        "Built an inter-university file-sharing platform with role-based access control, supporting file upload, download, view-only permissions, and admin-level management",
        "Integrated dynamic data fetching from APIs and implemented Firebase for secure PDF storage and retrieval",
        "Building a VR simulation tool for brain surgery training, leveraging Three.js and WebXR, aimed at improving medical student education through immersive learning"
      ]
    },
    {
      company: "VenWorld Global",
      role: "Fullstack Developer",
      technologies: ["Next.js", "Three.js", "RESTful API", "Node.js"],
      period: "Feb 2023 - Aug 2024",
      description: [
       "Built responsive, accessible UIs using React.js, TypeScript, and TailwindCSS, ensuring high usability across devices.",
       "I oversee the recent virtual cohort program for frontend candidates, including project assignments and the grading system"
      ]
    },
    {
      company: "OAU ICT, Ile-Ife, Nigeria (SIWES)",
      role: "Frontend Engineer",
      technologies: ["JavaScript MVC", "React.js"],
      period: "SIWES Internship",
      description: [
        "Worked closely with teams to create a scalable hostel management system, utilizing a JavaScript MVC framework and React.js.",
  
      ]
    }
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-[#0A0A0F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center md:text-left mb-12 px-6 md:px-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Work Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto md:mx-0"></div>
        </div>

        {/* Timeline */}
        <div className="relative p-6 md:p-12 md:w-3/4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline Line */}
              <div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-blue-500/30">
                {index === experiences.length - 1 ? null : <div className="absolute w-full h-full bg-gradient-to-b from-blue-500 to-purple-500/30"></div>}
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-blue-500 bg-[#0A0A0F] z-10"></div>

              {/* Content */}
              <div className="relative text-left">
                {/* Company Name */}
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2">
                  {exp.company}
                </h3>

                {/* Role */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <span className="text-lg text-gray-200">
                    {exp.role}
                  </span>
                  <span className="text-sm text-gray-400">
                    {exp.period}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/10 rounded-full text-sm text-blue-400 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description (if any) */}
                {exp.description && (
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mt-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 