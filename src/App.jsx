import TopNav from './components/TopNav'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Capabilities from './components/Capabilities'
import Flow from './components/Flow'
import Coverage from './components/Coverage'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Discipline from './components/Discipline'
import BimHighlight from './components/BimHighlight'
import BimPortfolio from './components/BimPortfolio'
import ElectricEvidence from './components/ElectricEvidence'
import Structures from './components/Structures'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ProjectModalProvider from './components/ProjectModalProvider'
import { BIM, ELECTRICA } from './data/content'

export default function App() {
  return (
    // Un único modal de proyecto para las cuatro secciones que lo abren.
    <ProjectModalProvider>
      <TopNav />
      <main>
        <Hero />
        <Intro />
        <Capabilities />
        <Flow />
        <Coverage />
        <Experience />
        <Projects />
        <Discipline data={BIM}>
          <BimHighlight />
          <BimPortfolio />
        </Discipline>
        <Discipline data={ELECTRICA} light imagesFirst>
          <ElectricEvidence />
        </Discipline>
        <Structures />
        <Team />
        <CTA />
      </main>
      <Footer />
    </ProjectModalProvider>
  )
}
