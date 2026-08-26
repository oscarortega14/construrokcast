import Reveal from './Reveal'
import { FACTS } from '../data/content'
import './Intro.css'

export default function Intro() {
  return (
    <section className="intro" id="empresa">
      <div className="wrap">
        <div className="intro-grid">
          <Reveal>
            <div className="eyebrow">01 · PERFIL</div>
            <h2 className="section-title">
              Capacidad constructiva con una lectura técnica más completa.
            </h2>
            <p className="intro-copy">
              CONSTRU ROKCAST S.A.S. es una empresa de Pasto orientada a construcción, adecuaciones,
              mantenimiento e infraestructura. Su operación se fortalece con capacidades del equipo
              en interventoría, consultoría, ingeniería eléctrica, modelado BIM y coordinación
              técnica.
            </p>
            <div className="facts">
              {FACTS.map((fact) => (
                <div className="fact" key={fact.value}>
                  <b>{fact.value}</b>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="statement">
            Una sola necesidad de infraestructura puede requerir obra, electricidad, estructura,
            modelado, documentación y coordinación. Nuestra propuesta es integrar esas capacidades
            dentro de una misma gestión.
          </Reveal>
        </div>
      </div>
    </section>
  )
}
