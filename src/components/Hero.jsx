import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white relative overflow-hidden px-4">
      {/* Background stripes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-stripes"></div>
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-stripes-delay"></div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 ">
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-blue-500/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-purple-500/20 rounded-full animate-float-delay"></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-green-500/20 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-14 h-14 bg-yellow-500/20 rounded-full animate-float-delay"></div>
      </div>

      <div className="container mx-auto pt-32 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Profile Picture */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-20 blur-xl"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <img 
                src="/very.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">👋</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Webflow Developer with Background in Coding
            </h1>
            <div className="flex gap-4 mt-8">
              {/* Tech stack icons */}
              <img src="/react.svg" alt="React" className="w-8 h-8" />
              <img src="/nextjs.svg" alt="Next.js" className="w-8 bg-white rounded-full h-8" />
              <img src="/tailwind.svg" alt="Tailwind" className="w-8 h-8" />
              <img src="/typescript.svg" alt="Webflow" className="w-8 h-8" />    
              <img src="/python.svg" alt="Webflow" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero 