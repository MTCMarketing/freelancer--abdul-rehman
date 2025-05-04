import About from "./components/about/about"
import Blog from "./components/blog/blog"
import CaseStudySection from "./components/Case-study/Case-study"
import Footer from "./components/footer/footer"
import Hero from "./components/hero/hero"
import Navbar from "./components/navbar/navbar"
import PopularServices from "./components/popular-services/popular-services"
import Pricing from "./components/pricing/pricing"
import Services from "./components/services/services"
import SlidingText from "./components/sliding-text/sliding-text"
import StatsSection from "./components/Stats/Stats"
import Team from "./components/team/team"
import Testimonial from "./components/testimonial/testimonial"
import '../src/components/style/style.css';
function App() {


  return (
    <div>

   
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
  
    </>
    <PopularServices/>
    <SlidingText/>
    <Team/>
    <StatsSection/>
    <CaseStudySection/>
    <Pricing/>
    <Testimonial/>
    <Blog/>
    <Footer/>
    </div>
  )
}

export default App
