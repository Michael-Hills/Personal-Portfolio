import HeroSection from '../components/HeroSection.jsx'
import AboutSection from '../components/AboutSection.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import ContactBanner from '../components/ContactBanner.jsx'
import Footer from '../components/Footer.jsx'


export default function home() {
  return (
    <div>
       

        <HeroSection/>
        <AboutSection />
        <ServicesSection/>
        <ProjectsSection/>
        <ContactBanner/>
        <Footer/>
        
        
      
    </div>
  )
}
