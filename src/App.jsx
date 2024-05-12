import './App.css'
import HeroSection from './components/heroSection/HeroSection'
import Section3 from './components/section3/Section3'
import Section4 from './components/section4/Section4'
import Section5 from './components/section5/Section5'
import Section6 from './components/section6/Section6'
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
    </div>
    </>
  )
}

export default App
