import './App.css'
import Footer from './components/footerSection/Footer'
import HeroSection from './components/heroSection/HeroSection'
import Section10 from './components/section10/Section10'
import Section11 from './components/section11/Section11'
import Section12 from './components/section12/Section12'
import Section13 from './components/section13/Section13'
import Section3 from './components/section3/Section3'
import Section4 from './components/section4/Section4'
import Section5 from './components/section5/Section5'
import Section6 from './components/section6/Section6'
import Section7 from './components/section7/Section7'
import Section8 from './components/section8/Section8'
import Section9 from './components/section9/Section9'
import SolutionSection from './components/solutionSection/SolutionSection'

function App() {

  return (
    <>
    <div className='layout-wrapper'>
     <div className='heroSection'>
     <HeroSection />
     </div>
      <div className='solutionSection'>
          <SolutionSection />
      </div>
      <div className="section3">
        <Section3 />
      </div>
      <div className="section4">
        <Section4 />
      </div>
      <div className="section5">
        <Section5 />
      </div>
      <div className="section6">
        <Section6 />
      </div>
      <div className="section7">
        <Section7 />
      </div>
      <div className="section8">
        <Section8 />
      </div>
      <div className="section9">
        <Section9 />
      </div>
      <div className="section10">
        <Section10 />
      </div>
      <div className="section11">
        <Section11/>
      </div>
      <div className="section12">
        <Section12/>
      </div>
      <div className="section13">
        <Section13/>
      </div>
      <div className="section14">
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App
