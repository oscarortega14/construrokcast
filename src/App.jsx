import TopNav from './components/TopNav'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Capabilities from './components/Capabilities'
import Flow from './components/Flow'
import Coverage from './components/Coverage'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Discipline from './components/Discipline'
import Structures from './components/Structures'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { BIM, ELECTRICA } from './data/content'

export default function App() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <Intro />
        <Capabilities />
        <Flow />
        <Coverage />
        <Experience />
        <Projects />
        <Discipline data={BIM} />
        <Discipline data={ELECTRICA} light imagesFirst />
        <Structures />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
