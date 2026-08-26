import Reveal from './Reveal'
import { STRUCTURE_CARDS } from '../data/content'
import './Structures.css'

export default function Structures() {
  return (
    <section className="structures" id="estructuras">
      <div className="wrap">
        <div className="eyebrow">09 · ESTRUCTURAS Y PATOLOGÍAS</div>
        <h2 className="section-title">
          Capacidad para acompañar decisiones cuando una edificación presenta afectaciones.
        </h2>
        <Reveal className="structure-box">
          <div>
            <h3>Evaluación e intervención de edificaciones</h3>
            <p>
              La propuesta integra arquitectura, obra civil, modelado y soporte de ingeniería
              estructural para organizar la información técnica y definir intervenciones
              proporcionadas al tipo de afectación. Los alcances especializados se desarrollan con
              el profesional competente.
            </p>
          </div>
          <div className="struct-cards">
            {STRUCTURE_CARDS.map((card) => (
              <div className="struct-card" key={card.title}>
                <b>{card.title}</b>
                <span>{card.text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
