import { Fragment } from 'react'
import Reveal from './Reveal'
import { TIMELINE } from '../data/content'
import './Experience.css'

export default function Experience() {
  return (
    <section className="experience" id="experiencia">
      <div className="wrap">
        <div className="eyebrow">05 · EXPERIENCIA QUE RESPALDA LA OPERACIÓN</div>
        <h2 className="section-title">
          Empresa reciente. Equipo con trayectoria previa en obra, interventoría y consultoría.
        </h2>
        <p className="lead">
          La experiencia se presenta de forma integrada, diferenciando cuando corresponde la
          trayectoria aportada por el equipo técnico.
        </p>
        <Reveal className="timeline">
          {TIMELINE.map((entry) => (
            <Fragment key={entry.year + entry.title}>
              <div className="t-year">{entry.year}</div>
              <div className="t-copy">
                <h4>{entry.title}</h4>
                <p>{entry.text}</p>
              </div>
            </Fragment>
          ))}
        </Reveal>
        <Reveal className="bigstat">
          <strong>1.158</strong>
          <div>
            <h4>viviendas reparadas en una operación territorial</h4>
            <p>
              Experiencia aportada por el equipo técnico, distribuida en 11 municipios de Nariño. Se
              utiliza como antecedente de capacidad para coordinar intervenciones geográficamente
              dispersas.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
