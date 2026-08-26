import Reveal from './Reveal'
import { FLOW_STEPS } from '../data/content'
import './Flow.css'

export default function Flow() {
  return (
    <section className="flow">
      <div className="wrap">
        <div className="eyebrow">03 · FORMA DE TRABAJO</div>
        <h2 className="section-title">Una misma intervención, coordinada de principio a fin.</h2>
        <div className="flowline">
          {FLOW_STEPS.map((step) => (
            <Reveal className="step" key={step.num}>
              <b>{step.num}</b>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
