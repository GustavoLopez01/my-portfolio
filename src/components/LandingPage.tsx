import Hero from './Hero'
import CustomCursor from './ui/CustomCursor'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'
import Navbar from './Nabvar'
import Contact from './Contact'
import useScrollReveal from '../hooks/useScrollReveal'

export default function LandingPage() {
  useScrollReveal();
  return (
    <div
      className="w-full"
      style={{
        // background: 'var(--bg)',
        // color: 'var(--fg)',
        // fontFamily: "'Inter', sans-serif",
        // minHeight: '100vh',
        // cursor: 'none',
      }}
    >
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
