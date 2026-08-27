import { useState } from 'react'
import Reveal from './Reveal'
import CapabilityModal from './CapabilityModal'
import { CAPABILITIES } from '../data/content'
import './Capabilities.css'

export default function Capabilities() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="capabilities" id="capacidades">
      <div className="wrap">
        <div className="eyebrow">02 · CAPACIDADES</div>
        <h2 className="section-title">
          Cinco frentes para intervenir infraestructura existente y nueva.
        </h2>
        <p className="lead">
          Priorizamos ejecución y mantenimiento, complementados por ingeniería y herramientas
          digitales que mejoran la comprensión y coordinación de cada intervención.
        </p>
        <div className="cap-grid">
          {CAPABILITIES.map((cap) => (
            <Reveal
              as="button"
              type="button"
              className="cap"
              key={cap.num}
              onClick={() => setSelected(cap)}
              aria-haspopup="dialog"
            >
              <span className="num">{cap.num}</span>
              <div className="cap-media">
                <img src={cap.image} alt={cap.title} />
              </div>
              <h3>{cap.title}</h3>
              <p>{cap.text}</p>
              <span className="cap-more">
                Ver detalle <i aria-hidden="true">→</i>
              </span>
            </Reveal>
          ))}
        </div>
      </div>

      <CapabilityModal capability={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
