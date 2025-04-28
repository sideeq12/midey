import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SideMenu from './components/SideMenu'
import './App.css'

function App() {
  return (
    <div className="bg-[#0A0A0F] min-h-screen text-white">
      <SideMenu />
      <Hero />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
