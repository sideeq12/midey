import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "Product Manager",
      company: "Tech Solutions",
      avatar: "/very.jpg",
      text: "Working with this developer was an absolute pleasure. Their attention to detail and technical expertise made our project a huge success."
    },
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "Creative Agency",
      avatar: "/very.jpg",
      text: "Exceptional work on our website redesign. The developer brought fresh ideas and implemented them flawlessly."
    },
    {
      name: "Mike Brown",
      role: "Startup Founder",
      company: "Innovation Labs",
      avatar: "/very.jpg",
      text: "Outstanding development skills and great communication throughout the project. Would definitely work together again."
    }
  ]

  return (
    <section className="py-20 bg-[#0A0A0F] text-white text-left">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Words from My Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/30"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 